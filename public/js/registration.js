const form = document.querySelector('.register-form');

if (form) {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    console.log(form.isAgried.checked);
    let isValid = true;
    if (form.password.value !== form.passwordCheck.value) {
      document.querySelector('.checkPassword').classList.toggle('hidden');
      isValid = false;
    }
    if (!form.isAgried.checked) {
      document.querySelector('.checkAgried').classList.toggle('hidden');
      isValid = false;
    }

    const {method, action} = event.target;

    if (isValid) {
      const response = await fetch(action, {
        method,
        body: JSON.stringify({
          fullname: form.fullname.value,
          snils: form.snils.value,
          mail: form.mail.value,
          password: form.password.value,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
      });

      const responseJSON = await response.json();
      console.log(responseJSON);

      if (!responseJSON.success) {
        const errorDiv = document.createElement('div');
        errorDiv.classList.add('error');
        errorDiv.innerText = responseJSON.message;
        event.target.parentElement.prepend(errorDiv);
      }
    }

    window.location = '/';
  });
}

const snils = document.querySelector('#snils');
const snilsMask = { // создаем объект параметров
  mask: '000-000-000 00',
};
IMask(snils, snilsMask);

IMask(
  document.querySelector('#email'),
  {
    mask: [
      {
        mask: /^\S*@?\S*$/,
      },
    ],
  },
);
