const React = require('react');

function Good({ good }) {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center task">
      {/* Форма для редактирования задачи (выполнено, не выполнено) */}
      {/* <form method="POST" action={`/goods/${good.id}`}>
        <button type="submit"><h2>{good.title}</h2></button>
      </form> */}
      <a href={`/goods/${good.id}`}><h2>{good.title}</h2></a>
      <img src={`${good.img}`} />
      <p>{good.description}</p>
      <span>{good.price}</span>
    </li>
  );
}

module.exports = Good;
