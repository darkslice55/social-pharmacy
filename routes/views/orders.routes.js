const ordersRouter = require('express').Router();
const Error = require('../../views/Error');
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
  res.send(currentBasket);
});

module.exports = ordersRouter;
