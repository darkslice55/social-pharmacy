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

goodsRouter
  .route('/:id/order')
  .post(async (req, res) => {
    console.log('user', !res.app.locals.user, res.app.locals.user);
    if (!res.app.locals.user) {
      return res.json({ isLogged: false });
    }
    const currentGood = await Good.findByPk(req.params.id);
    let currentOrder = await Order.findOne({
      where: {
        user_id: req.session.userId,
        is_done: false,
      },
    });
    console.log('currentOrder', currentOrder);
    if (!currentOrder) {
      currentOrder = await Order.create({
        user_id: req.session.userId,
        total_price: currentGood.price,
      });
    }
    const basketItem = await Basket.create({
      order_id: currentOrder.id,
      good_id: currentGood.id,
      total_amount: 1,
    });
    res.send({ isLogged: true, success: true });
    // res
    //   .status(201)
    //   .renderComponent(TaskView, { task }, { doctype: false });
  })
  .put(async (req, res) => {
    try {
      const currentOrder = await Order.findOne({
        where: {
          user_id: req.session.userId,
          is_done: false,
        },
      });
      const basket = await Basket.findOne({
        where: {
          order_id: currentOrder.id,
          good_id: req.params.id,
        },
      });

      if (!basket) {
        res
          .status(404)
          .json({ success: false, message: 'Нет такого товара' });

        return;
      }

      // меняем состояние задачи и сохраняем в БД
      if ('total_amount' in req.body) basket.total_amount = req.body.total_amount;
      await basket.save();

      res.json({ success: true });
    } catch (er) {
      next(er);
    }
  });

module.exports = goodsRouter;
