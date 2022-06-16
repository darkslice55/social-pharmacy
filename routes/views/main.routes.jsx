const mainRouter = require('express').Router();
const Main = require('../../views/Main');
const Error = require('../../views/Error');
const { Good } = require('../../db/models');

mainRouter
  .route('/')
  .get((req, res) => {
    res.redirect('/goods');
  });

module.exports = mainRouter;

// mainRouter.get('/', async (req, res) => {
//   // console.log(req.locals.user.fullname);
//   // res.renderComponent(Main);
//   try {
//     const goods = await Good.findAll({
//       order: [
//         ['createdAt', 'DESC'],
//       ],
//     });
//     console.log(goods);

//     res.renderComponent(Main, { goods });
//   } catch (error) {
//     res.redirect('/error');
//   }
// });

// mainRouter.get('/error', (req, res) => {
//   res.renderComponent(Error);
// });
