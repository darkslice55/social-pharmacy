const React = require('react');
const strLimit = require('../public/js/str-limit');

function Good({ good }) {
  const newPrice = Number(good.price) - Number(good.price) * (Number(good.discont) / 100);
  return (
    // <li className="list-group-item d-flex justify-content-between align-items-center task">
    //   {/* Форма для редактирования задачи (выполнено, не выполнено) */}
    //   <h2>{good.title}</h2>
    //   <img src={`${good.img}`} />
    //   <p>{good.description}</p>
    //   <span>{good.price}</span>
    // </li>
    <div className="col good" data-discont={`${good.discont ?? 0}`} data-amount={`${good.amount}`} data-id={`${good.id}`}>
      <div className="card shadow-sm">
        {good.amount ? (
          <p className="card-stock stock">В наличии</p>
        ) : (<p className="card-stock stock-none">Нет в наличии</p>) }
        {newPrice ? (
          <></>
        ) : (<p className="free-price">Сегодня бесплатно</p>) }
        <a href={`goods/${good.id}`}> <img src={`${good.img}`} className="card_img" alt="..." /> </a>
        {/* <svg className="bd-placeholder-img card-img-top" src={`${good.img}`} width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

        <div className="card-body">
          <h3 className="card-title"> <a href={`goods/${good.id}`}> {good.title} </a></h3>
          <p className="card-text">{strLimit(good.description, 150)}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="buy btn btn-outline-secondary">Купить</button>
              {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
            </div>
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
  );
}

module.exports = Good;
