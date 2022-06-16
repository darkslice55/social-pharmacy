const mainRouter = require('express').Router();
const Main = require('../../views/Main');
const Error = require('../../views/Error');
const { Good } = require('../../db/models');

mainRouter.get('/', async (req, res) => {
  // console.log(req.locals.user.fullname);
  // res.renderComponent(Main);
  try {
    const goods = await Good.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    console.log(goods);

    res.renderComponent(Main, { goods });
  } catch (error) {
    res.redirect('/error');
  }
});

mainRouter.post('/', async (req, res) => {
  req.app.locals.wall = req.body.wall;
  res.redirect('/');
});

mainRouter.get('/error', (req, res) => {
  res.renderComponent(Error);
});

module.exports = mainRouter;
