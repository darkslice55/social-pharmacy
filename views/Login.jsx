const React = require('react');
const Layout = require('./Layout');

function Login() {
  return (
    <Layout>
      <form method="POST" action="/auth/login">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Email или СНИЛС</label>
          <input type="text" className="form-control" id="name-input" name="login" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </Layout>
  );
}

module.exports = Login;
