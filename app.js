// не забудь установить babel:
// npm i @babel/core @babel/preset - env @babel/preset-react @babel/register
// также не забудь положить файл .babelrc в корень проекта
require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

// импортируем роутеры (там лежат наши ручки)
const mainRouter = require('./routes/views/main.routes');
// const todoRouter = require('./routes/views/tasks.routes');
// const todoApiRouter = require('./routes/api/tasks.routes');
const authRouter = require('./routes/views/auth.routes');
const usersRouter = require('./routes/api/cabinet.routes');
const ordersRouter = require('./routes/api/orders.routes');
const ordersViewRouter = require('./routes/views/orders.routes');
const goodsRouter = require('./routes/views/good.routes');
const goodsApiRouter = require('./routes/api/good.routes');
// const basketRouter = require('./routes/views/basket.routes');

const app = express();

// функция настройки экспресса
expressConfig(app);

// подключаем роутеры
app.use(mainRouter); // роутер главной страницы
// app.use('/tasks', todoRouter); // роутер списка задач (все url начинаются с /tasks)
app.use('/auth', authRouter);
app.use('/users', usersRouter);
app.use('/orders', ordersRouter);
// app.use('/basket', basketRouter);
app.use('/orders', ordersViewRouter);

// app.use('/api/tasks', todoApiRouter); // роутер списка задач (все url начинаются с /tasks)
app.use('/goods', goodsRouter);
app.use('/api/goods', goodsApiRouter);

app.use((error, req, res, next) => {
  console.error('Произошла ошибка', error);
  res.status(500).json({
    success: false,
    message: 'Непредвиденная ошибка сервера, попробуйте зайти позже',
  });
});

app.listen(3000, () => console.log('server started at 3000'));
