const usersRouter = require('express').Router();
const Cabinet = require('../../views/Cabinet');
// const Order = require('../../db/models');

usersRouter.get('/:id', async (req, res, next) => {
  const userId = req.session.userId;
  console.log('<<<--->>> user id:', userId);
  // try {
  // console.log('req.params:', req.params.id);

  // const orders = await Order.findOne({ where: { user_id: 3 } });
  res.renderComponent(Cabinet);
  // } catch (er) {
  //   next(er);
  // }
});

module.exports = usersRouter;


// try {
//   const goods = await Good.findAll({
//     order: [
//       ['createdAt', 'DESC'],
//     ],
//   });
//   console.log(goods);

//   res.renderComponent(Main, { goods });
// } catch (error) {
//   res.redirect('/error');
// }
