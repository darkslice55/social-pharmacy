const React = require('react');

function Good({ good }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center task">
      {/* Форма для редактирования задачи (выполнено, не выполнено) */}
      <h2>{good.title}</h2>
      <img src={`${good.img}`} />
      <p>{good.description}</p>
      <span>{good.price}</span>
    </li>
  );
}

module.exports = Good;
