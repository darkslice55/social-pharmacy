/* eslint-disable react/style-prop-object */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function Basket({ currentBasket }) {
  let summ = 0;
  if (currentBasket) {
    summ = currentBasket.reduce((acc, good) => {
      const currAmount = Number(good.total_amount);
      const currPrice = Number(good['Good.price']);
      const currDiscont = Number(good['Good.discont']) / 100;
      const finalPrice = currPrice - currPrice * currDiscont;
      return acc + currAmount * finalPrice;
      // acc + Number(good.total_amount) * (Number(good['Good.price']) - (Number(good['Good.price']) * (Number(good['Good.discont']) / 100)))))
  }, 0);
  }
  return (
    <Layout>
      <Header />
      <div className="container" data-order_id={`${currentBasket ? currentBasket[0].order_id : 0}`}>

        {currentBasket ? (currentBasket.map((good) => (
          <ul className="list-group good" data-discont={`${good['Good.discont'] ?? 0}`} data-amount={`${good.amount}`} data-id={`${good.good_id}`}>
            <li className="list-group-item">
              <div className="basket">
                <div>
                  <a href={`goods/${good.good_id}`}><img width="180" height="100" src={`${good['Good.img']}`} /> </a>
                </div>
                <div className="title">
                  <a href={`goods/${good.good_id}`}><h5 className="card-text">{good['Good.title']}</h5></a>
                </div>
                <div className="change">
                  <div>
                    <p>Изменить количество</p>
                  </div>
                  {/* <div className="basket amount-block">
                  <button className="btn1 minus">-</button>
                  <p className="amount">{good.total_amount}</p>
                  <button className="btn1 plus">+</button>
                </div> */}
                  <div className="amount-block btn-group">
                    <button type="button" className="minus btn btn-outline-secondary">-</button>
                    <input className="form-control amount" disabled type="number" value={`${good.total_amount}`} aria-label="количество товаров" max={`${good['Good.amount']}`} min="1" />
                    <button type="button" className="plus btn btn-outline-secondary">+</button>
                  </div>
                </div>
                <div className="one_price">
                  <div>
                    <p>Стоимость за ед.</p>
                  </div>
                  <div className="basket">
                    <p>{good['Good.price']}₽</p>
                  </div>
                </div>
                <div className="total_price">
                  <div>
                    <p>Общая стоимость</p>
                  </div>
                  <div className="basket">
                    <p className="price-value"><span className="total-price">{Number(good.total_amount) * (Number(good['Good.price']) - (Number(good['Good.price']) * (Number(good['Good.discont']) / 100)))}</span>₽</p>
                  </div>
                </div>
                <div className="delet">
                  <div>
                    <p>Удалить</p>
                  </div>
                  <div className="basket">
                    <button className="btn2">X</button>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        ))) : (
          <p>Ваша корзина пустая</p>
        )}
        <div className="summ list-group-item">
          <div>
            <p>Сумма</p>
          </div>
          <div className="basket">
            <p className="price-value"><span className="summ-value">{summ}</span>₽</p>
          </div>
          {currentBasket ? (
            <button type="button" className="add-order btn btn-outline-secondary">Сделать заказ</button>
          ) : (
            <button type="button" className="add-order btn btn-outline-secondary disabled">Сделать заказ</button>
          )}
        </div>
        <script defer src="/js/good.js" />
        <script defer src="/js/order.js" />
      </div>

    </Layout>
  );
}

module.exports = Basket;
