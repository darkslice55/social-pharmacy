const goodsRouter = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User, Order, Basket, Good,
} = require('../../db/models');
const Main = require('../../views/Main');

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
  });

goodsRouter
  .route('/error')
  .get((req, res) => {
    res.renderComponent(Error);
  });

goodsRouter
  .route('/:id')
  .get(async (req, res) => {
    const good = await Good.findByPk(Number(req.params.id));
    res.send(good);
  })
  .post((req, res) => {

  });

goodsRouter
  .route('/:id/edit')
  .get(async (req, res) => {
    const good = await Good.findByPk(Number(req.params.id));
    res.send(good);
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
