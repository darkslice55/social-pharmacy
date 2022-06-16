const React = require('react');
const Good = require('./Good');

function GoodsList({ goodsList }) {
  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
      {goodsList.map((good) => (
        <Good key={good.id} good={good} />
      ))}
    </div>
  );
}

module.exports = GoodsList;
