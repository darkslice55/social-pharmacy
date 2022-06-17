document.querySelectorAll('.buy').forEach((button) => {
  if (!Number(button.closest('.good').dataset.amount)) {
    button.disabled = true;
  }
  button.addEventListener('click', async (event) => {
    const goodId = event.target.closest('.good').dataset.id;
    console.log(goodId);
    const response = await fetch(`/api/goods/${goodId}/order`, {
      method: 'POST',
    });
    const answer = await response.json();
    if (!answer.isLogged) {
      window.location = '/auth/login';
    }
    if (answer.success) {
      button.classList.add('hidden');
      button.closest('.good').querySelector('.amount-block').classList.remove('hidden');
    }
  });
});

document.querySelectorAll('.plus').forEach((plus) => {
  plus.addEventListener('click', async (event) => {
    const goodId = event.target.closest('.good').dataset.id;
    let currentAmount = Number(plus.closest('.amount-block').querySelector('.amount').value);
    const maxAmount = Number(plus.closest('.good').dataset.amount);
    plus.closest('.amount-block').querySelector('.amount').value = currentAmount = currentAmount === maxAmount ? maxAmount : currentAmount + 1;
    console.log(currentAmount);
    const response = await fetch(`/api/goods/${goodId}/order`, {
      method: 'PUT',
      body: JSON.stringify({
        total_amount: currentAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});

document.querySelectorAll('.minus').forEach((plus) => {
  plus.addEventListener('click', async (event) => {
    const goodId = event.target.closest('.good').dataset.id;
    let currentAmount = Number(plus.closest('.amount-block').querySelector('.amount').value);
    plus.closest('.amount-block').querySelector('.amount').value = currentAmount = currentAmount === 0 ? 0 : currentAmount - 1;
    const response = await fetch(`/api/goods/${goodId}/order`, {
      method: 'PUT',
      body: JSON.stringify({
        total_amount: currentAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });
});
