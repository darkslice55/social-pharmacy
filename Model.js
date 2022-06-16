const { Order, Basket } = require('./db/models');

async function seed() {
  await Order.create({
    user_id: 1,
    total_price: 300,
    is_done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Order.create({
    user_id: 2,
    total_price: 700,
    is_done: false,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 1,
    good_id: 1,
    total_amount: 2,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 1,
    good_id: 2,
    total_amount: 4,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 1,
    good_id: 3,
    total_amount: 6,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 2,
    good_id: 3,
    total_amount: 11,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  await Basket.create({
    order_id: 2,
    good_id: 3,
    total_amount: 15,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
seed();
