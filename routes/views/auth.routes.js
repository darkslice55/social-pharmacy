const authRouter = require('express').Router();
const bcrypt = require('bcrypt');
const { Op } = require('sequelize');
const nodemailer = require('nodemailer');
const { User } = require('../../db/models');
const Login = require('../../views/Login');
const Register = require('../../views/Register');

authRouter
  .route('/register')
  .get((req, res) => {
    res.renderComponent(Register);
  })
  .post(async (req, res) => {
    const {
      fullname, snils, mail, password,
    } = req.body;

    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { snils },
          { mail },
        ],
      },
    });
    // проверяем есть ли уже такой пользователь в БД
    if (existingUser) {
      res.send('Пользователь с такой почтой или СНИЛС уже есть');
      return;
    }

    // создаём нового пользователя
    const user = await User.create({
      fullname,
      snils,
      mail,
      // хэшируем пароль, чтобы не хранить в открытом виде в БД
      password: await bcrypt.hash(password, 10),
    });

    // кладём id нового пользователя в хранилище сессии (сразу логиним пользователя)
    // console.log(fullname, snils, email, password);
    req.session.userId = user.id;
    res.app.locals.user = user;
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'danil88tmn@gmail.com',
        pass: 'Kjrjvjnbd77',
      },
    });
    try {
      await transporter.sendMail({
        from: '"Аптека Черепаха" <cherepaha.pharmacy@gmail.com>',
        to: mail,
        subject: 'Attachments',
        text: 'This message with attachments.',
        html:
          'This <i>message</i> with <strong>attachments</strong>.',
        // attachments: [
        //   { filename: 'greetings.txt', path: '/assets/files/' },
        //   {
        //     filename: 'greetings.txt',
        //     content: 'Message from file.',
        //   },
        //   { path: 'data:text/plain;base64,QmFzZTY0IG1lc3NhZ2U=' },
        //   {
        //     raw: `
        //         Content-Type: text/plain
        //         Content-Disposition: attachment;

        //         Message from file.
        //       `,
        //   },
        // ],
      });
    } catch (err) {
      console.log(err);
    }

    res.send({ success: true });
  });

authRouter
  .route('/login')
  .get((req, res) => {
    res.renderComponent(Login);
  })
  .post(async (req, res) => {
    const { login, password } = req.body;
    const existingUser = await User.findOne({
      where: {
        [Op.or]: [
          { snils: login },
          { mail: login },
        ],
      },
    });

    // проверяем, что такой пользователь есть в БД и пароли совпадают
    if (existingUser && await bcrypt.compare(password, existingUser.password)) {
      // кладём id нового пользователя в хранилище сессии (логиним пользователя)
      req.session.userId = existingUser.id;
      res.app.locals.user = existingUser;
      res.redirect('/');
    } else {
      res.send('Такого пользователя нет либо пароли не совпадают');
    }
  });

authRouter.get('/logout', (req, res) => {
  req.session.destroy();
  delete res.app.locals.user;
  res.redirect('/');
});

module.exports = authRouter;
