const React = require('react');
const Layout = require('./Layout');
const { Context } = require('../middlewares/reactSsr');
// const Order = require('../db/models/');

function Cabinet() {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <a className="btn btn-primary btn-xl" href={`/users/${user.id}`}>{user.fullname}</a>&nbsp;&nbsp;&nbsp;
      <a className="btn btn-primary btn-xl" href="/auth/logout">Log out</a>
      <ul className="goods list-group">
        <h1 className="btn btn-primary btn-xl">Вы модератор</h1>
        <br></br>
        <a className="btn btn-primary btn-xl" href={`/users/${user.id}/orders`}>Вывести список заказов</a>
      </ul>
      <div className="tasks list-group">
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </Layout>
  );
}

module.exports = Cabinet;
