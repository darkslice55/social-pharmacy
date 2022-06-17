const ordersRouter = require('express').Router();
const Error = require('../../views/Error');
const BasketView = require('../../views/Basket');
const { Good, Order, Basket } = require('../../db/models');

ordersRouter.get('/', async (req, res) => {
  const currentUser = res.app.locals.user;
  if (!currentUser) {
    return res.redirect('/auth/login');
  }
  const currentOrder = await Order.findOne({
    where: {
      user_id: currentUser.id,
      is_done: false,
    },
  });
  let currentBasket;
  if (currentOrder) {
    currentBasket = await Basket.findAll({
      raw: true,
      where: {
        order_id: currentOrder.id,
      },
      include: [Good],
    });
    console.log(currentBasket);
  }
  res.renderComponent(BasketView, { currentBasket });
  // res.send(currentBasket);
})
  .put('/:id', async (req, res, next) => {
    try {
      const order = await Order.findByPk(Number(req.params.id));
      if ('total_price' in req.body) order.total_price = req.body.total_price;
      if ('is_done' in req.body) order.is_done = req.body.is_done;
      await order.save();

      const currentBasket = await Basket.findAll({ where: { order_id: order.id } });
      const goods = await Good.findAll({});
      goods.forEach(async (good) => {
        for (let i = 0; i < currentBasket.length; i += 1) {
          if (good.id === currentBasket[i].good_id) {
            good.amount -= currentBasket[i].total_amount;
          }
        }
        await good.save();
      });

      res.json({ success: true });
    } catch (er) {
      next(er);
    }
  });

module.exports = ordersRouter;
