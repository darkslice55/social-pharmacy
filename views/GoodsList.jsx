const React = require('react');
// const Good = require('./Good');

function GoodsList({ goodsList }) {
  return (
    <ol className="list-group list-group-numbered">
      {goodsList.map((good) => (
        <li className="list-group-item">
          <a
            className="stretched-link"
            data-id={good.id}
            href={`/orders/${good.id}/goods`}
            key={good.id}
          >
            {`${good.title} в количестве ${good.amount}шт. на сумму ${good.price}₽`}
          </a>
        </li>
      ))}
      <br />
    </ol>
  );
}

module.exports = GoodsList;
