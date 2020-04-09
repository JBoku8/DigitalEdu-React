let message = 'Global Message';
// global world

// V8
// garbage collector

function hello() {
  // local world
  let message = 'Local Message';
  console.log(message);
}

function plusOne(x) {
  return x + 1;
}

function fn(callBack, x) {
  return callBack(x);
}

function mul(x) {
  let ad = 'adadad';
  let baba = 'adadad';
  console.log(ad, baba);
  return function (y) {
    return x * y;
  };
}

// first class citizens

// const res = mul(8);

// console.log(res(9));
// console.log(res(2));
// console.log(res(3));

function calc(x, y, op) {
  switch (op) {
    case '+':
      console.log(x + y);
      break;
  }
}
// calc(params.x, params.y, params.operation);

function smartParams({ operation = '+', x = 0, y = 0 }) {
  switch (operation) {
    case '+':
      console.log(x + y);
      break;
  }
}

function fnDefault(text = 'fnDefault value') {
  alert(text);
}

const params = {
  x: 10,
  operation: '+',
  y: 20,
  z: 100,
  PI: 3.14151692,
};

// smartParams(params);

function success(message) {
  // aq tu shemovida e.i roli adminia
  console.log(message);
}

function error(message) {
  // aq tu shemovida e.i admini ar aris
  console.error(message);
}

function checkRole(user, { successFn, errorFn }) {
  if (user.role === 'admin') {
    successFn('Accepted');
  } else {
    errorFn('Permission Error');
  }
}

const Jecky = {
  name: 'Jecky',
  role: 'Guest',
};

const John = {
  name: 'John',
  role: 'admin',
};

const options = {
  successFn: success,
  errorFn: error,
};

// checkRole(John, options);

const numbers = [2, 3, 4, 5, 7, 8, 11, 13, 15];

const filtered = numbers.filter((number, index) => {
  return number < 10;
});

const ahdhad = numbers.filter((number, index) => {
  return number > 10;
});

// const rootElement = document.querySelector('#root');
const rootElement = document.getElementById('root');
const pElement = document.querySelector('#root p');
const linkElement = document.getElementById('link');

// pElement.onclick = function () {
//   console.log('P clicked');
// };

// pElement.onclick = function () {
//   console.log('p another click');
// };

linkElement.addEventListener('click', (event) => {
  event.preventDefault();
  event.stopPropagation();
});

pElement.addEventListener('click', (event) => {
  //   console.log('p another click');
  event.stopImmediatePropagation();
  console.log(event.target);
  //   console.log(event.currentTarget);
});

pElement.addEventListener('click', (event) => {
  //   console.log('P clicked');
  console.log(event.target);
  //   console.log(event.currentTarget);
});

rootElement.addEventListener('click', function (event) {
  //   console.log('#root clicked');
  console.log(event.target);
  console.log(event.currentTarget);
});

// const result = parseInt(prompt('write a number', 0));
// const check = confirm('+18?');
// console.log(result);
// console.log(check);

// bubbling, capturing

// console.log(filtered);
// console.log(ahdhad);
// console.log(numbers);
