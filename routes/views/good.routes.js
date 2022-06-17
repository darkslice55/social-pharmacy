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

      const currentUser = res.app.locals.user;
      let currentBasket;
      if (currentUser) {
        const currentOrder = await Order.findOne({
          where: {
            user_id: currentUser.id,
            is_done: false,
          },
        });
        if (currentOrder) {
          currentBasket = await Basket.findAll({
            raw: true,
            where: {
              order_id: currentOrder.id,
            },
          });
          console.log(currentBasket);
        }
      }
      if (currentBasket) {
        goods.forEach((good) => {
          for (let i = 0; i < currentBasket.length; i += 1) {
            if (good.id === currentBasket[i].good_id) {
              good.basket_amount = currentBasket[i].total_amount;
            }
          }
        });
      }

      res.renderComponent(Main, { goods });
    } catch (error) {
      console.log(error);
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
