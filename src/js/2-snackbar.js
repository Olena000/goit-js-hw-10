import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const delay = form.elements.delay.value;
  const state = form.elements.state.value;
  const promise = new Promise((resolve, reject) => {
    if (state === 'fulfilled') {
      setTimeout(() => resolve(delay), delay);
    } else {
      setTimeout(() => reject(delay), delay);
    }
  });

  promise
    .then(value => {
      iziToast.show({
        color: 'green',
        message: `✅ Fulfilled promise in ${delay}ms`,
        position: 'topRight',
      });
    })
    .catch(error => {
      iziToast.show({
        color: 'red',
        message: `❌ Rejected promise in ${delay}ms`,
        position: 'topRight',
      });
    });
  form.reset();
});
