const ordersRouter = require('express').Router();
// const Cabinet = require('../../views/Cabinet');
const GoodsList = require('../../views/GoodsList');
const { Basket } = require('../../db/models');
const { Good } = require('../../db/models');

// const Order = require('../../db/models');

ordersRouter.get('/:id/goods', async (req, res) => {
  const basketArr = await Basket.findAll({ where: { order_id: Number(req.params.id) }, raw: true, include: [Good] });
  console.log('<<<--->>> req.params.id:', req.params.id);

  const goodsList = basketArr.map((obj) => {
    const objGood = {};
    objGood.title = obj['Good.title'];
    objGood.price = obj['Good.price'];
    objGood.amount = obj['Good.amount'];
    return objGood;
  });
  
  // обратиться в map по id goods к базе good -> вернут массив имён с именем и стоимсотью
  
  console.log('<<<--->>> goodsList:', goodsList);
  
  const listOfGoods = res.renderComponent(GoodsList, { goodsList });
  console.log('<<<--->>> listOfGoods', listOfGoods);
  res.end(listOfGoods);
});

module.exports = ordersRouter;
