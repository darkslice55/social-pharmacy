const basketRouter = require('express').Router();
const {
  User, Order, Basket, Good,
} = require('../../db/models');
const BasketViews = require('../../views/Basket');

basketRouter
  .route('/')
  .get(async (req, res) => {
    const goods = await Good.findAll({
      order: [
        ['createdAt', 'DESC'],
      ],
    });
    res.renderComponent(BasketViews, { goods });
  });

module.exports = basketRouter;
