const React = require('react');
const Layout = require('./Layout');
const Good = require('./Good');
const Header = require('./Header');
const { Context } = require('../middlewares/reactSsr');

function Main({ goods }) {
  const { user } = React.useContext(Context);
  return (
    <Layout>
      <Header />
      <div className="album py-5 bg-light">
        <div className="container">
          krasivaya obeziana
          <nav className="navbar navbar-expand-lg bg-light rounded" aria-label="Eleventh navbar example">
            <div className="container-fluid">
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarsExample09" aria-controls="navbarsExample09" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>

              <div className="collapse navbar-collapse" id="navbarsExample09">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <div className="form-check nav-link">
                      <input className="form-check-input" type="checkbox" value="" id="inStock" />
                      <label className="form-check-label" htmlFor="inStock">
                        в наличии
                      </label>
                    </div>
                  </li>
                  <li className="nav-item">
                    <div className="form-check nav-link">
                      <input className="form-check-input" type="checkbox" value="" id="discount" />
                      <label className="form-check-label" htmlFor="discount">
                        скидки
                      </label>
                    </div>
                  </li>
                  <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle sort" href="#" id="dropdown09" data-bs-toggle="dropdown" data-direct="up" aria-expanded="false">Сортировка по цене</a>
                  </li>
                </ul>
                <form role="search" className="search">
                  <input className="form-control search" type="search" placeholder="Поиск лекарств" aria-label="Поиск" />
                </form>
              </div>
            </div>
          </nav>

          <div className="card-list row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {goods.map((good) => (
              <Good key={good.id} good={good} />
            ))}
          </div>
        </div>
      </div>
      <script defer src="/js/main.js" />
      <script defer src="/js/good.js" />

    </Layout>
  );
}

module.exports = Main;
