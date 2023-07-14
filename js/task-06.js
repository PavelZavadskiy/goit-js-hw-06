const input = document.querySelector('#validation-input');

input.addEventListener('blur', () => {
  if (input.value.length == input.getAttribute('data-length')) {
    input.classList.contains('invalid') ? input.classList.replace('invalid', 'valid') : input.classList.add('valid');
  } else {
    input.classList.contains('valid') ? input.classList.replace('valid', 'invalid') : input.classList.add('invalid');
  }
});
