const goodsRouter = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User, Order, Basket, Good,
} = require('../../db/models');
const Main = require('../../views/Main');
const NewGood = require('../../views/NewGood');

goodsRouter
  .route('/')
  .get(async (req, res) => {
    // console.log(req.locals.user.fullname);
    // res.renderComponent(Main);
    try {
      const goods = await Good.findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      });
      // console.log(goods);

      res.renderComponent(Main, { goods });
    } catch (error) {
      res.redirect('/error');
    }
  })
  .post(async (req, res) => {
  });

goodsRouter
  .route('/error')
  .get((req, res) => {
    res.renderComponent(Error);
  });

// goodsRouter
//   .route('/:id')
//   .get(async (req, res) => {
//     const good = await Good.findByPk(Number(req.params.id));
//     res.send(good);
//   })
//   .post((req, res) => {
//  вылетает ошибка
//   });

goodsRouter
  .route('/:id/edit')
  .get(async (req, res) => {
    const good = await Good.findByPk(Number(req.params.id));
    res.send(good);
  })
  .post((req, res) => {

  });

goodsRouter
  .route('/new')
  .get(async (req, res) => {
    res.renderComponent(NewGood);
  })
  .post((req, res) => {

  });
module.exports = goodsRouter;
// goodsRouter
//   .route()
//   .get((req, res) => {

//   })
//   .post((req, res) => {

//   });
// todoRouter.put('/:id', async (req, res, next) => {
//   try {
//     // достаём из БД задачу с заданным id
//     const task = await Task.findByPk(Number(req.params.id));

//     if (!task) {
//       res
//         .status(404)
//         .json({ success: false, message: 'Нет такой задачи' });

//       return;
//     }

//     // меняем состояние задачи и сохраняем в БД
//     if ('title' in req.body) task.title = req.body.title;
//     if ('done' in req.body) task.done = req.body.done;
//     await task.save();

//     res.json({ success: true });
//   } catch (er) {
//     next(er);
//   }
