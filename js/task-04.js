let counterValue = 0;

const btnDecrement = document.querySelector('button[data-action="decrement"]');
const btnIncrement = document.querySelector('button[data-action="increment"]');
const spanValue = document.querySelector('#value');

const decrement = () => {
  counterValue--;
  spanValue.textContent = counterValue;
};

const increment = () => {
  counterValue++;
  spanValue.textContent = counterValue;
};

btnDecrement.addEventListener('click', decrement);
btnIncrement.addEventListener('click', increment);
