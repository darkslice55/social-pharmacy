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
  console.log('click on ', event.target.checked);
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
