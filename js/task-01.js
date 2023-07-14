const list = document.querySelector('#categories');
const children = list.children;
console.log(`Number of categories: ${children.length}`);

[...children].forEach(element => {
  console.log(`Category: ${element.children[0].textContent}`);
  console.log(`Elements: ${element.children[1].children.length}`);
});
