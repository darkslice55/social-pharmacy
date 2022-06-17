if (document.querySelectorAll('.buy')) {
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
}

document.querySelectorAll('.plus').forEach((plus) => {
  plus.addEventListener('click', async (event) => {
    const goodId = event.target.closest('.good').dataset.id;
    const currentAmount = Number(plus.closest('.amount-block').querySelector('.amount').value);
    const maxAmount = Number(plus.closest('.good').dataset.amount);
    let newAmount;
    plus.closest('.amount-block').querySelector('.amount').value = newAmount = currentAmount === maxAmount ? maxAmount : currentAmount + 1;
    console.log(newAmount);
    const response = await fetch(`/api/goods/${goodId}/order`, {
      method: 'PUT',
      body: JSON.stringify({
        total_amount: newAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let newTotalPrice;
    const currentTotalPrice = Number(plus.closest('.good').querySelector('.total-price').innerText);
    if (plus.closest('.good').querySelector('.total-price')) {
      newTotalPrice = Math.floor((currentTotalPrice / currentAmount) * newAmount);
      plus.closest('.good').querySelector('.total-price').innerText = newTotalPrice;
    }
    if (plus.closest('.container').querySelector('.summ-value')) {
      const currentSumm = Number(plus.closest('.container').querySelector('.summ-value').innerText);
      plus.closest('.container').querySelector('.summ-value').innerText = currentSumm + newTotalPrice - currentTotalPrice;
    }
  });
});

document.querySelectorAll('.minus').forEach((minus) => {
  minus.addEventListener('click', async (event) => {
    const goodId = event.target.closest('.good').dataset.id;
    const currentAmount = Number(minus.closest('.amount-block').querySelector('.amount').value);
    let newAmount;
    minus.closest('.amount-block').querySelector('.amount').value = newAmount = currentAmount === 0 ? 0 : currentAmount - 1;
    const response = await fetch(`/api/goods/${goodId}/order`, {
      method: 'PUT',
      body: JSON.stringify({
        total_amount: newAmount,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    let newTotalPrice;
    const currentTotalPrice = Number(minus.closest('.good').querySelector('.total-price').innerText);
    if (minus.closest('.good').querySelector('.total-price')) {
      newTotalPrice = Math.floor((currentTotalPrice / currentAmount) * newAmount);
      minus.closest('.good').querySelector('.total-price').innerText = newTotalPrice;
    }
    if (minus.closest('.container').querySelector('.summ-value')) {
      const currentSumm = Number(minus.closest('.container').querySelector('.summ-value').innerText);
      minus.closest('.container').querySelector('.summ-value').innerText = currentSumm + newTotalPrice - currentTotalPrice;
    }
  });
});
