const goodsRouter = require('express').Router();
const {
  User, Order, Basket, Good,
} = require('../../db/models');
const Main = require('../../views/Main');
const NewGood = require('../../views/NewGood');
const GoodLong = require('../../views/GoodLong');

goodsRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const goods = await Good.findAll({
        order: [
          ['createdAt', 'DESC'],
        ],
      });

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

goodsRouter
  .route('/:id')
  .get(async (req, res) => {
    console.log('IDDDDD', req.params.id);
    const good = await Good.findByPk(Number(req.params.id));
    console.log(good);
    res.renderComponent(GoodLong, { good });
    // res.send(good);
  });
//   .post((req, res) => {
// //  вылетает ошибка
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
