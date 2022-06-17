const React = require('react');
const Good = require('./Good');

function GoodsList({ goodsList }) {
  return (
    <>
      {goodsList.map((good) => (
        <Good key={good.id} good={good} />
      ))}
    </>
  );
}

module.exports = GoodsList;
