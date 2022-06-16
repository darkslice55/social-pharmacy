const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <Layout>
      {/* <form className="row g-3 needs-validation register-form" noValidate method="POST" action="/auth/register">
        <div className="col-md-4">
          <label htmlFor="fullname" className="form-label">Фамилия имя отчество</label>
          <input type="text" className="form-control" id="fullname" name="fullname" value="Mark" required />
          <div className="valid-feedback">
            Выглядит отлично!
          </div>
        </div>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">Электронная почта</label>
          <input type="email" className="form-control" id="email" name="email" required />
          <div className="invalid-feedback">
            Введите корректную почту
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="snils" className="form-label">СНИЛС</label>
          <input type="text" className="form-control" id="snils" name="snils" required />
          <div className="invalid-feedback">
            Введите корректный СНИЛС!
          </div>
        </div>
        <div className="col-md-3">
          <label htmlFor="password" className="form-label">Введите пароль</label>
          <input type="password" className="form-control" id="password" name="password" required />
        </div>
        <div className="col-md-3">
          <label htmlFor="passwordCheck" className="form-label">Введите пароль повторно</label>
          <input type="password" className="form-control" id="passwordCheck" required />
          <div className="invalid-feedback checkPassword">
            Введенные пароли не совпадают
          </div>
        </div>
        <div className="col-12">
          <div className="form-check">
            <input className="form-check-input" type="checkbox" value="" id="invalidCheck" name="isAgried" required />
            <label className="form-check-label" htmlFor="invalidCheck">
              Согласие с пользовательскими условиями
            </label>
            <div className="invalid-feedback checkAgried">
              Вы должны согласиться
            </div>
          </div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary" type="submit">Зарегестрироваться</button>
        </div>
      </form> */}
      <form className="register-form" method="POST" action="/auth/register">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Фамилия Имя Отчество</label>
          <input type="text" className="form-control" id="name-input" name="fullname" />
        </div>
        <div className="mb-3">
          <label htmlFor="snils" className="form-label">СНИЛС</label>
          <input type="text" className="form-control" id="snils" name="snils" placeholder="000-000-000 00" pattern="\d{3}-\d{3}-\d{3} \d{2}" />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="mail" />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Введите пароль</label>
          <input type="password" className="form-control" id="password" name="password" />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordCheck" className="form-label">Введите пароль повторно</label>
          <input type="password" className="form-control" id="passwordCheck" name="passwordCheck" />
        </div>
        <div className="mb-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="isAgried" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
            Согласие с пользовательским соглашением
          </label>
        </div>
        <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
      </form>
      <script defer src="/js/imask.js" />
      <script defer src="/js/registration.js" />
    </Layout>
  );
}

module.exports = Register;
