const orderButton = document.querySelector('.add-order');
const total_price = Number(document.querySelector('.summ-value').innerText);
orderButton.addEventListener('click', async (event) => {
  event.preventDefault();
  const is_done = true;
  const orderID = event.target.closest('.container').dataset.order_id;
  const response = await fetch(`/orders/${orderID}`, {
    method: 'PUT',
    body: JSON.stringify({
      total_price,
      is_done,
    }),
    headers: {
      'Content-Type': 'application/json',
    },
  });
  const answer = await response.json();
  if (answer.success) {
    window.location = '/';
  }
});
