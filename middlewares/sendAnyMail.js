const React = require('react');
const nodeoutlook = require('nodejs-nodemailer-outlook');

const Context = React.createContext();
const { user } = React.useContext(Context);

const {
  fullname, mail,
} = user;

// функция принимает объект obj={ order: id, order: price, }

function sendAnyMail(order) {
  nodeoutlook.sendEmail({
    auth: {
      user: 'cherepaha.pharmacy@outlook.com',
      pass: 'OyA1{VkPs3ye',
    },

    from: "Аптека Черепаха 'cherepaha.pharmacy@outlook.com'",
    to: mail,
    subject: 'Вы оформили заказ у Черепахи',
    html: `<b>Уважаемый ${fullname}!</b> Ваш заказ №${order.id} на сумму ${order.price}р успешно сформирован.\nВаша Черепаха`,
    text: 'This is text version!',

    onError: (e) => console.log(e),
    onSuccess: (i) => console.log(i),
  });
}

module.exports = sendAnyMail;
