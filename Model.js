const { Order, Basket, Good } = require('./db/models');

async function seed() {
  await Order.create({
    user_id: 1,
    total_price: 300,
    is_done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  // await Order.create({
  //   user_id: 2,
  //   total_price: 700,
  //   is_done: false,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  await Basket.create({
    order_id: 3,
    good_id: 6,
    total_amount: 13,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 3,
    good_id: 5,
    total_amount: 12,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 3,
    good_id: 4,
    total_amount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  // await Basket.create({
  //   order_id: 2,
  //   good_id: 3,
  //   total_amount: 11,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
  // await Basket.create({
  //   order_id: 2,
  //   good_id: 3,
  //   total_amount: 15,
  //   createdAt: new Date(),
  //   updatedAt: new Date(),
  // });
}
// seed();

async function get() {
  const orders = await Order.findAll({
    raw: true,
    where: { user_id: 1 },
    include: [Basket],
  });
  const good = await Good.findAll({
  });
  console.log(orders);
}
get();
