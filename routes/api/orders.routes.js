const ordersRouter = require('express').Router();
// const Cabinet = require('../../views/Cabinet');
const Orders = require('../../views/Order');
const { Order } = require('../../db/models');

// const Order = require('../../db/models');

ordersRouter.get('/:id/goods', async (req, res) => {
  const orders = await Order.findAll({ where: { user_id: 3 }, raw: true });
  // console.log('<<<--->>> orders:', orders);
  // console.log('<<<--->>> orders:', orders);

  res.renderComponent(Orders, { orders });
  // res.end()
});

module.exports = ordersRouter;
