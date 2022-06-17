/* eslint-disable react/style-prop-object */
const React = require('react');
const Layout = require('./Layout');
const Header = require('./Header');

function Basket({ goods }) {
  return (
    <Layout>
      <Header />

      {goods.map((good) => (
        <ul className="list-group">
          <li className="list-group-item">
            <div className="basket">
              <div>
                <a href={`goods/${good.id}`}><img width="180" height="100" src={`${good.img}`} /> </a>
              </div>
              <div className="title">
                <a href={`goods/${good.id}`}><h5 className="card-text">{good.title}</h5></a>
              </div>
              <div className="change">
                <div>
                  <p>Изменить колличество</p>
                </div>
                <div className="basket">
                  <button className="btn1">+</button>
                  <p>{good.amount}</p>
                  <button className="btn1">-</button>
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
      ))}

    </Layout>
  );
}

module.exports = Basket;
