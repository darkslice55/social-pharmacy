// handlers для ручки вывода списка товаров по заказу
const goods = document.querySelector('.buttonOforderList');
goods.addEventListener('click', async (orderEvent) => {
  orderEvent.preventDefault();
  const orderid = orderEvent.target.dataset.id;
  // alert(orderid);
  const response = await fetch(`orders/${orderid}/goods`, {
    method: 'POST',
    body: JSON.stringify({
      orderid,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const result = await response.text();
  document.querySelector('.buttonOforderList').insertAdjacentHTML('afterend', result);
});

// const entrieslist = document.querySelector('.entries');
// entrieslist.addEventListener('click', async (entries) => {
//   if (entries.target.className.includes('link-delete')) {
//     console.log('entries', entries.target.closest('.entry').id);
//     const deleteId = entries.target.closest('.entry').id;
//     await fetch(`/delete/${deleteId}`, {
//       method: 'DELETE',
//     });
//     entries.target.closest('.entry').remove();
//   }
// });
