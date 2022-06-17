const React = require('react');
// const Good = require('./Good');

function GoodsList({ good }) {
  return (
    <div className="container">
      <ol className="list-group list-group-numbered">
        {good.map((el) => (

          <li className="list-group-item">
            <a
              className="stretched-link"
              data-id={el.id}
              href={`/goods/${el.id}`}
            // href={`goods/${good.id}`
              key={el.id}
            >
              {`${el.title} в количестве ${el.amount}шт. на сумму ${el.price}₽`}
            </a>
          </li>

        ))}
        <br />
      </ol>
    </div>
  );
}

module.exports = GoodsList;
