const usersRouter = require('express').Router();
const Cabinet = require('../../views/Cabinet');
const Orders = require('../../views/Order');
const { Order } = require('../../db/models');

// const Order = require('../../db/models');

usersRouter.get('/:id', async (req, res, next) => {
  const userId = req.session.userId;
  res.renderComponent(Cabinet);
});

usersRouter.get('/:id/orders', async (req, res) => {

  const orders = await Order.findAll({ where: { user_id: 3 }, raw: true });

  res.renderComponent(Orders, { orders });
});

module.exports = usersRouter;
