const React = require('react');
const Layout = require('./Layout');

function NewGood() {
  return (
    <Layout>
      <form method="POST" action="/goods/">
        <div className="mb-3">
          <label htmlFor="title-input" className="form-label">title</label>
          <input type="text" className="form-control" id="name-title" name="title" />
        </div>
        <div className="mb-3">
          <label htmlFor="description-input" className="form-label">description</label>
          <input type="text" className="form-control" id="name-description" name="description" />
        </div>
        <div className="mb-3">
          <label htmlFor="price-input" className="form-label">price</label>
          <input type="text" className="form-control" id="name-price" name="price" />
        </div>
        <div className="mb-3">
          <label htmlFor="amount-input" className="form-label">amount</label>
          <input type="text" className="form-control" id="amount-input" name="amount" />
        </div>
        <div className="mb-3">
          <label htmlFor="img-input" className="form-label">img</label>
          <input type="text" className="form-control" id="img-input" name="img" />
        </div>
        <div className="mb-3">
          <label htmlFor="discont-input" className="form-label">discont</label>
          <input type="text" className="form-control" id="discont-input" name="discont" />
        </div>
        <button type="submit" className="btn btn-primary">Войти</button>
      </form>
    </Layout>
  );
}

module.exports = NewGood;
