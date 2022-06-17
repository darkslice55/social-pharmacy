const usersRouter = require('express').Router();
const Cabinet = require('../../views/Cabinet');
const { Order, Basket, Good } = require('../../db/models');
const Orders = require('../../views/Order');

usersRouter.get('/:id', async (req, res) => {
  const { userId } = req.session;
  const orders = await Order.findAll({
    raw: true,
    where: { user_id: userId },
    include: [Basket],
  });
  const good = await Good.findAll({
  });
  res.renderComponent(Cabinet, { orders, good });
});

usersRouter.get('/:id/orders', async (req, res) => {
  const orders = await Order.findAll({ where: { user_id: 3 }, raw: true });

  res.renderComponent(Orders, { orders });
});

// async function get() {
//   const orders = await Order.findAll({
//     raw: true,
//     where: { user_id: 1 },
//     include: [Besket],
//   });
//   // const good = await Good.findAll({
//   // });
//   console.log(orders);
// }
// get();
module.exports = usersRouter;
