const usersRouter = require('express').Router();
const Cabinet = require('../../views/Cabinet');
const Orders = require('../../views/Order');
const { Order } = require('../../db/models');

// const Order = require('../../db/models');

usersRouter.get('/:id', async (req, res, next) => {
  const userId = req.session.userId;
  // console.log('<<<--->>> user id:', userId);
  // try {
  // console.log('req.params:', req.params.id);

  res.renderComponent(Cabinet);
  // } catch (er) {
  //   next(er);
  // }
});

usersRouter.get('/:id/orders', async (req, res) => {
  const orders = await Order.findAll({ where: { user_id: 3 }, raw: true });
  // console.log('<<<--->>> orders:', orders);
  // console.log('<<<--->>> orders:', orders);

  res.renderComponent(Orders, { orders });
  // res.end()
});

module.exports = usersRouter;
