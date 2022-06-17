document.querySelectorAll('.buy').forEach((button) => {
  button.addEventListener('click', (event) => {
    console.log(event.target.closest('.good').dataset.id);
  });
});
