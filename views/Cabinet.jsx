const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/reactSsr');
const Header = require('./Header');
const { Order, Good } = require('../db/models');
const GoodsList = require('./GoodsList');

function Cabinet({ orders, good }) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <Header />
      <ul className="goods list-group">
        <h1 className="cab">Личный Кабинет</h1>
        <br />
        <ul>
          <ol>Полное имя: {user.fullname}</ol>
          <ol>Почтовый ящик: {user.mail}</ol>
          <ol>Снилс: {user.snils}</ol>
          <ol>{user.isAdmin}</ol>
          <ol>Дата регистрации: {user.updatedAt.toString()}</ol>
        </ul>
        <h3 className="history">Истроя Заказов</h3>

      </ul>

      {/* <ul className="123">
        {orders.map((el) => (
          <div>
            <ol className="ord">{el.id}</ol>
            <ol className="ord">{good[el['Baskets.good_id'] - 1].dataValues.title}</ol>
            <ol className="ord">{el.total_amount}</ol>
            <ol className="ord">{el['Baskets.total_amount']}</ol>
          </div>
        ))}
      </ul> */}
      {/* <a className="btn btn-primary btn-xl" href={`/users/${user.id}/orders`}>Вывести список заказов</a> */}
      <GoodsList good={good} />
    </Layout>
  );
}

module.exports = Cabinet;
