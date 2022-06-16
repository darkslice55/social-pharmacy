const goodsRouter = require('express').Router();
const bcrypt = require('bcrypt');
const {
  User, Order, Basket, Good,
} = require('../../db/models');
const Main = require('../../views/Main');

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
  });

module.exports = goodsRouter;
// goodsRouter
//   .route()
//   .get((req, res) => {

//   })
//   .post((req, res) => {

//   });
// todoRouter.put('/:id', async (req, res, next) => {
//   try {
//     // достаём из БД задачу с заданным id
//     const task = await Task.findByPk(Number(req.params.id));

//     if (!task) {
//       res
//         .status(404)
//         .json({ success: false, message: 'Нет такой задачи' });

//       return;
//     }

//     // меняем состояние задачи и сохраняем в БД
//     if ('title' in req.body) task.title = req.body.title;
//     if ('done' in req.body) task.done = req.body.done;
//     await task.save();

//     res.json({ success: true });
//   } catch (er) {
//     next(er);
//   }
