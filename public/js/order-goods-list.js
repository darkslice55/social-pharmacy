// handlers для ручки вывода списка товаров по заказу

const goods = document.querySelectorAll('.list-group');
goods.forEach(element => {
  element.addEventListener('click', async (orderEvent) => {
    // orderEvent.preventDefault();
    console.log('name = ', orderEvent.target.name);
    const orderid = orderEvent.target.dataset.id;
    console.log('id = ', orderid);

    if (orderEvent.target.name === 'listFalse') {
      orderEvent.target.name = 'listTrue';
      console.log('CLICK IF TO', orderEvent.target.name);
      const response = await fetch(`/orders/${orderid}/goods`, {
        method: 'GET',
      });
      const result = await response.text();
      // нужно выбрать текущую кнопку, а не первую
      document.querySelector('.buttonOforderList').insertAdjacentHTML('afterend', result);
    } else {
      // await fetch(`/orders/${orderid}/goods/del`, {
      //   method: 'DELETE',
      // });
      const listToDelete = orderEvent.target.closest(`.listOforderList`);
      const querySelector = listToDelete.querySelector('.list-group-numbered');
      console.log('querySelector ====>', querySelector);
      querySelector.remove();
      orderEvent.target.name = 'listFalse';
    };
  })
});
