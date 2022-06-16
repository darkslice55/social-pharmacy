const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/reactSsr');
// const Order = require('../db/models/');

function Order({ orders }) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <a className="btn btn-primary btn-xl" href={`/users/${user.id}`}>{user.fullname}</a>&nbsp;&nbsp;&nbsp;
      <a className="btn btn-primary btn-xl" href="/auth/logout">Log out</a>&nbsp;&nbsp;&nbsp;
      <a className="btn btn-primary btn-xl" href="/">HOME</a>
      {/* <ul className="goods list-group"> */}
      <h1 className="btn btn-primary btn-xl" >Ваш список заказов</h1>
      <br></br>

      <ul className="goods list-group">
        {orders.map((orderOne) => (
          <li>
            <a className="btn btn-primary btn-xl" href={`/orders/${orderOne.id}/goods`} key={orderOne.id} good={orderOne}>{`Заказ № ${orderOne.id} на сумму ${orderOne.total_price}`}</a>
          </li>
        ))}
      </ul>
    </Layout>
  );
}

module.exports = Order;
