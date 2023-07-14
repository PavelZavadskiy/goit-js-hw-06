function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const DEFAULT_SIZE = 30;
const DEFAULT_ADDITION = 10;

const divBox = document.querySelector('#boxes');
const btnCreate = document.querySelector('[data-create]');
const btnDestroy = document.querySelector('[data-destroy]');
const input = document.querySelector('input');

function createBoxes(amount) {
  const childrenCount = divBox.children.length;
  let items = [];
  for (let i = 0; i < amount; i++) {
    let item = document.createElement('div');
    item.style.height = item.style.width = DEFAULT_SIZE + DEFAULT_ADDITION * (i + childrenCount) + 'px';
    item.style.backgroundColor = getRandomHexColor();
    items.push(item);
  }
  divBox.append(...items);
}

btnCreate.addEventListener('click', () => {
  createBoxes(input.value);
});

btnDestroy.addEventListener('click', () => {
  [...divBox.children].forEach(element => {
    element.remove();
  });
});
