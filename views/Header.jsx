const React = require('react');

const { Context } = require('../middlewares/reactSsr');

function Header() {
  const { user } = React.useContext(Context);

  return (
    <header className="header-wrapper">
      <div className="header-top">
        <div className="container">
          <div className="row">
            <div className="col-6">
              <div className="header-info"><a href="tel:+1234567890"> +7 123 456 7890 </a></div>

            </div>
            <div className="col-6">
              <div className="header-top-nav">
                <ul>
                  {user ? (
                    <>
                      {/* <a className="btn btn-primary btn-xl" href={`/users/${user.id}`}>{user.fullname}</a>&nbsp;&nbsp;&nbsp;
                      <a className="btn btn-primary btn-xl" href="/auth/logout">Log out</a> */}
                      <li><a href={`/users/${user.id}`}>{user.fullname}</a></li>
                      <li><a href="/auth/logout"> Выйти</a></li>
                    </>
                  )
                    : (
                      <>
                        <li><a href="/auth/login">Вход</a></li>
                        <li><a href="/auth/register">Регистрация</a></li>
                      </>
                    )}
                  {/* <li><a href="/auth/register">Вход</a></li>
                  <li><a href="/auth/login">Регистрация</a></li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="header-area header-default sticky-header">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-5 col-sm-3 col-md-3 col-lg-2">
              <div className="header-logo-area">
                <a href="/">
                  <img className="logo-main" src="logo.svg" alt="Logo" />
                </a>
              </div>
            </div>
            <div className="col-7 col-sm-9 col-md-9 col-lg-10">
              <div className="header-align">
                <div className="header-navigation-area">
                  <ul className="main-menu nav justify-content-center">
                    <li className="has-submenu active"><a href="/">Домой</a></li>
                    <li><a href="/about">О нас</a></li>
                    <li><a href="/contacts">Контакты</a></li>
                  </ul>
                </div>
                <div className="header-action-area">
                  <div className="header-action-cart">
                    <a className="cart-icon" href="javascript:void(0);">
                      <i className="icofont-shopping-cart" />
                    </a>
                  </div>
                  <button className="btn-menu btn-menu-rs d-xl-none" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

module.exports = Header;
