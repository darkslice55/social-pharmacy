const React = require('react');

function Good({ good }) {
  return (
    // <li className="list-group-item d-flex justify-content-between align-items-center task">
    //   {/* Форма для редактирования задачи (выполнено, не выполнено) */}
    //   <h2>{good.title}</h2>
    //   <img src={`${good.img}`} />
    //   <p>{good.description}</p>
    //   <span>{good.price}</span>
    // </li>
    <div className="col">
      <div className="card shadow-sm">
        <img src={`${good.img}`} className="card-img-top" alt="..." />  
        {/* <svg className="bd-placeholder-img card-img-top" src={`${good.img}`} width="100%" height="225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false"><title>Placeholder</title><rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef" dy=".3em">Thumbnail</text></svg> */}

        <div className="card-body">
          <h3 className="card-title"> {good.title} </h3>
          <p className="card-text">{good.description}</p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <button type="button" className="btn btn-sm btn-outline-secondary">Купить</button>
              {/* <button type="button" className="btn btn-sm btn-outline-secondary">Edit</button> */}
            </div>
            <small className="text-muted">{good.price}</small>
          </div>
        </div>
      </div>
    </div>
  );
}

module.exports = Good;
