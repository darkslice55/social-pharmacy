const React = require('react');
const Layout = require('./Layout');
const Good = require('./Good');
const { Context } = require('../middlewares/reactSsr');

function Main({ goods }) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <h1 className="mb-1">Просто аптека</h1>
      {user ? (
        <>
          <a className="btn btn-primary btn-xl" href={`/users/${user.id}`}>{user.fullname}</a>&nbsp;&nbsp;&nbsp;
          <a className="btn btn-primary btn-xl" href="/auth/logout">Log out</a>
        </>
      )
        : (
          <>
          <a className="btn btn-primary btn-xl" href="/auth/register">Регистрация</a>&nbsp;&nbsp;&nbsp;
          <a className="btn btn-primary btn-xl" href="/auth/login">Логин</a>
          </>
        )}
      <form>
        <div className="mb-3">
          <label htmlFor="nameFilter" className="form-label">Поиск по названию</label>
          <input type="text" className="form-control" placeholder="Поиск" />
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Только со скидкой</label>
        </div>
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">Только в наличии</label>
        </div>
      </form>

      <ul className="goods list-group">
        {goods.map((good) => (
          <Good key={good.id} good={good} />
        ))}
      </ul>

    </Layout>
  );
}

module.exports = Main;
