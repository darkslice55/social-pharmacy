const ordersRouter = require('express').Router();
// const Cabinet = require('../../views/Cabinet');
const GoodsList = require('../../views/GoodsList');
const { Basket } = require('../../db/models');
const { Good } = require('../../db/models');

// const Order = require('../../db/models');

ordersRouter.get('/:id/goods', async (req, res) => {
  const basketArr = await Basket.findAll({ where: { order_id: Number(req.params.id) }, raw: true, include: [Good] });
  const goodsList = basketArr.map((obj) => {
    const objGood = {};
    objGood.title = obj['Good.title'];
    objGood.price = obj['Good.price'];
    objGood.amount = obj['Good.amount'];
    objGood.amount = obj['Good.id'];
    return objGood;
  });
  const listOfGoods = res.renderComponent(GoodsList, { goodsList });
  res.end(listOfGoods);
});

ordersRouter.delete('/:id/goods/del', async (req, res, next) => {
  try {
    // удаляем задачу с заданным id
    const removedCount = await Good.destroy({
      where: {
        // в req.params.id ляжет соответсвующая часть URL
        id: Number(req.params.id),
      },
    });

    if (removedCount === 0) {
      res
        .status(404)
        .json({ success: false, message: 'Нет такой задачи' });
    } else {
      res.json({ success: true });
    }
  } catch (er) {
    next(er);
  }
});

module.exports = ordersRouter;
