// var num_1 = 20;
// var num_2 = 47;

// var num_3 = num_1 + num_2;

// variable hoisting

const message = 'My Message';

// greet();
// sayHi();

const myBalance = 3204;

// single thread lang

// num_3 = num_3 + 5;
// num_3 += 1;
// ++ increment,
// -- decrement
// num_3 = 0;
// console.log(++num_3);
// console.log(num_3)

// console.log((num_3 % 2 ) == 1);

// function declaration
function greet() {
  console.log('Welcome...');
}

// greet();

// function expression
const sayHi = function() {
  console.log('Say Hi ...');
};

const print = () => {
    console.log('Print Function');
};

const plusOne = num => num + 1;


sayHi();
print();

const nine = 9;
const increasedNum = plusOne(nine);

console.log(increasedNum);
