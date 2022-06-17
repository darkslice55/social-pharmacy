document.querySelector('#inStock').addEventListener('click', (event) => {
  console.log('click on ', event.target.checked);
  if (event.target.checked) {
    document.querySelectorAll('.good').forEach((card) => {
      if (!Number(card.dataset.amount)) {
        card.classList.add('hidden');
      }
    });
  } else {
    document.querySelectorAll('.good').forEach((card) => {
      card.classList.remove('hidden');
    });
  }
});

document.querySelector('#discount').addEventListener('click', (event) => {
  if (event.target.checked) {
    document.querySelectorAll('.good').forEach((card) => {
      console.log(Number(card.dataset.discont));
      if (Number(card.dataset.discont) === 0) {
        card.classList.add('hidden');
      }
    });
  } else {
    document.querySelectorAll('.good').forEach((card) => {
      card.classList.remove('hidden');
    });
  }
});

document.querySelector('.search').addEventListener('submit', (event) => {
  event.preventDefault();
});

document.querySelector('.search').addEventListener('input', (event) => {
  document.querySelectorAll('.good').forEach((card) => {
    const title = card.querySelector('.card-title').innerText;
    if (event.target.value) {
      if (!title.toLowerCase().includes(event.target.value.toLowerCase())) {
        card.classList.add('hidden');
      }
    } else {
      card.classList.remove('hidden');
    }
  });
});

const sortButton = document.querySelector('.sort');

if (sortButton) {
  sortButton.addEventListener('click', async (event) => {
    event.preventDefault();
    const { direct } = sortButton.dataset;
    console.log(`/api/goods/sort/${direct}`);
    sortButton.dataset.direct = direct === 'up' ? 'down' : 'up';
    const response = await fetch(`/api/goods/sort/${direct}`, {
      method: 'GET',
    });
    const answer = await response.text();
    // console.log(answer);
    document.querySelector('.card-list').innerHTML = answer;
    // if (!answer.isLogged) {
    //   window.location = '/auth/login';
    // }
    // if (answer.success) {
    //   button.classList.add('hidden');
    //   button.closest('.good').querySelector('.amount-block').classList.remove('hidden');
    // }
  });
}
