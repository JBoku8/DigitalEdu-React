// DOM
// Document Object Model
// DOM traversal
const rootElement = document.getElementById('root');

const helloDom = document.createTextNode('Hello DOM.');
const title = document.createElement('h2');
title.appendChild(helloDom);
title.classList.add('title');

const rootElements = document.querySelectorAll('.container');
const element = document.querySelector('.container');

// console.log(rootElements);
// console.log(helloDom);

console.log(rootElements);
for (let i = 0; i < rootElements.length; i++) {
  rootElements[i].style.padding = '40px';
  rootElements[i].onclick = function () {
    this.classList.toggle('active');
    this.innerText = '';
    this.appendChild(title);
  };
}

document.onclick = function () {
  element.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  });
};

// rootElements.style.padding = '40px';

// rootElement.onclick = function () {
//   rootElement.classList.toggle('active');
//   rootElement.innerText = '';
//   rootElement.appendChild(helloDom);
// };
