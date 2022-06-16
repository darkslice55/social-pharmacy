const goodsRouter = require('express').Router();
const {
  User, Order, Basket, Good,
} = require('../../db/models');

goodsRouter
  .route('/:id')
  .put(async (req, res) => {
    const good = await Good.findByPk(Number(req.params.id));
    if ('title' in req.body) good.title = req.body.title;
    if ('description' in req.body) good.description = req.body.description;
    if ('price' in req.body) good.price = req.body.price;
    if ('amount' in req.body) good.img = req.body.img;
    if ('discont' in req.body) good.discont = req.body.discont;
    await good.save();
  })
  .delete(async (req, res) => {
    await Good.destroy({
      where: {
        id: Number(req.params.id),
      },
    });
  });

module.exports = goodsRouter;
