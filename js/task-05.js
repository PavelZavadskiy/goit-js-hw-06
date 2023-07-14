const input = document.querySelector('#name-input');
const output = document.querySelector('#name-output');

document.addEventListener('keyup', event => {
  let text = input.value;
  if (text.length == 0) {
    output.textContent = 'Anonymous';
  } else {
    output.textContent = text;
  }
});
