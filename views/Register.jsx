const React = require('react');
const Layout = require('./Layout');

function Register() {
  return (
    <html lang="ru">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="" />
        <meta name="author" content="Mark Otto, Jacob Thornton, and Bootstrap contributors" />
        <meta name="generator" content="Hugo 0.98.0" />
        <title>Логин </title>

        <link rel="canonical" href="https://getbootstrap.com/docs/5.2/examples/sign-in/" />

        <link href="/assets/css/bootstrap.min.css" rel="stylesheet" />
        <link rel="apple-touch-icon" href="/docs/5.2/assets/img/favicons/apple-touch-icon.png" sizes="180x180" />
        <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-32x32.png" sizes="32x32" type="image/png" />
        <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon-16x16.png" sizes="16x16" type="image/png" />
        <link rel="manifest" href="/docs/5.2/assets/img/favicons/manifest.json" />
        <link rel="mask-icon" href="/docs/5.2/assets/img/favicons/safari-pinned-tab.svg" color="#712cf9" />
        <link rel="icon" href="/docs/5.2/assets/img/favicons/favicon.ico" />
        <meta name="theme-color" content="#712cf9" />
        <link href="/assets/css/signin.css" rel="stylesheet" />
      </head>
      <body className="text-center">
        {/* <form method="POST" action="/auth/login">
        <div className="mb-3">
          <label htmlFor="name-input" className="form-label">Email или СНИЛС</label>
          <input type="text" className="form-control" id="name-input" name="login" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="exampleInputPassword1" name="password" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form> */}
        <main className="form-signin w-100 m-auto">
          <form className="register-form" method="POST" action="/auth/register">
            <a href="/">
              <img className="mb-4" src="/logo.svg" alt="" />
            </a>
            <h1 className="h3 mb-3 fw-normal">Добро пожаловать!</h1>
            <div className="form-floating">
              <input type="text" className="form-control" id="name-input" name="fullname" placeholder="Фамилия Имя Отчество" />
              <label htmlFor="name-input" className="form-label">Фамилия Имя Отчество</label>
            </div>
            <div className="form-floating">
              <input type="text" className="form-control" id="snils" name="snils" placeholder="000-000-000 00" pattern="\d{3}-\d{3}-\d{3} \d{2}" />
              <label htmlFor="snils">СНИЛС</label>
            </div>
            <div className="form-floating">
              <input type="email" className="form-control" id="email" name="mail" placeholder="Эл. почта" />
              <label htmlFor="email">Email</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="password" name="password" placeholder="Пароль" />
              <label htmlFor="passwordCheck">Пароль</label>
            </div>
            <div className="form-floating">
              <input type="password" className="form-control" id="floatingPassword" name="passwordCheck" placeholder="Password" />
              <label htmlFor="floatingPassword">Введите пароль повторно</label>
            </div>
            <div className="mb-3">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="isAgried" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Согласие с пользовательским соглашением
              </label>
            </div>
            {/* <div className="form-floating">
              <input type="password" className="form-control" id="passwordCheck" name="passwordCheck" />
              <label htmlFor="passwordCheck">Введите пароль повторно</label>
            </div> */}

            {/* <div className="checkbox mb-3">
              <label>
                <input type="checkbox" value="remember-me" /> Remember me
              </label>
            </div> */}
            <button className="w-100 btn btn-lg btn-primary" type="submit">Зарегистрироваться</button>
            <a href="/auth/login">Войти</a>
          </form>
        </main>
        <script defer src="/js/imask.js" />
        <script defer src="/js/registration.js" />
      </body>
    </html>
  );
  // return (
  //   <Layout>
  //     <form className="register-form" method="POST" action="/auth/register">
  //       <div className="mb-3">
  //         <label htmlFor="name-input" className="form-label">Фамилия Имя Отчество</label>
  //         <input type="text" className="form-control" id="name-input" name="fullname" />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="snils" className="form-label">СНИЛС</label>
  //         <input type="text" className="form-control" id="snils" name="snils" placeholder="000-000-000 00" pattern="\d{3}-\d{3}-\d{3} \d{2}" />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="email" className="form-label">Email</label>
  //         <input type="email" className="form-control" id="email" name="mail" />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="password" className="form-label">Введите пароль</label>
  //         <input type="password" className="form-control" id="password" name="password" />
  //       </div>
  //       <div className="mb-3">
  //         <label htmlFor="passwordCheck" className="form-label">Введите пароль повторно</label>
  //         <input type="password" className="form-control" id="passwordCheck" name="passwordCheck" />
  //       </div>
  //       <div className="mb-3">
  //         <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" name="isAgried" />
  //         <label className="form-check-label" htmlFor="flexCheckDefault">
  //           Согласие с пользовательским соглашением
  //         </label>
  //       </div>
  //       <button type="submit" className="btn btn-primary">Зарегистрироваться</button>
  //     </form>
  //     <script defer src="/js/imask.js" />
  //     <script defer src="/js/registration.js" />
  //   </Layout>
  // );
}

module.exports = Register;
