const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function GoodLong({ good }) {
  const newPrice = Number(good.price) - Number(good.price) * (Number(good.discont) / 100);
  return (
    <Layout>
      <Header />
      <div className="col good" data-discont={`${good.discont ?? 0}`} data-amount={`${good.amount}`}  data-id={`${good.id}`}>
        <div className="container">
          <div className="card shadow-sm">
            <div className="row row-cols-2">
              <div className="col">
                <img src={`${good.img}`} className="card_img" alt="..." />
              </div>
              <div className="col">
                <div className="card-body">
                  <h3 className="card-title"> {good.title} </h3>
                  <p className="card-text">{good.description}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <div className="btn-group">
                      <button type="button" className="buy btn btn-outline-secondary">Купить</button>
                      <div className="amount-block hidden btn-group">
                        <button type="button" className="minus btn btn-outline-secondary">-</button>
                        <input className="form-control amount" disabled type="number" value="1" aria-label="количество товаров" max={`${good.amount}`} min="0" />
                        <button type="button" className="plus btn btn-outline-secondary">+</button>
                      </div>
                    </div>
                    {good.amount ? (
                      <p className="stock-card">В наличии {`${good.amount}`} ед.</p>
                    ) : (<p className="stock-card">Нет в наличии</p>) }
                    <div className="price">
                      <p className="price-text">Цена: {good.discont && (
                      <span className="oldprice-value"> {`${good.price}`}₽ </span>
                      )}
                      </p>
                      <p className="price-value">{newPrice}₽</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <script defer src="/js/good.js" />
    </Layout>
  );
}

module.exports = GoodLong;
