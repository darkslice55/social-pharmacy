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
                    <a className="nav-link dropdown-toggle" href="#" id="dropdown09" data-bs-toggle="dropdown" aria-expanded="false">Сортировка</a>
                    <ul className="dropdown-menu" aria-labelledby="dropdown09">
                      <li><a className="dropdown-item" href="#">Action</a></li>
                      <li><a className="dropdown-item" href="#">Another action</a></li>
                      <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                  </li>
                </ul>
                <form role="search">
                  <input className="form-control" type="search" placeholder="Search" aria-label="Search" />
                </form>
              </div>
            </div>
          </nav>

          <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
            {goods.map((good) => (
              <Good key={good.id} good={good} />
            ))}
          </div>
        </div>
      </div>

    </Layout>
  );
}

module.exports = Main;
