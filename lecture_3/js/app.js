class Person {
  constructor(firstName, lastName, balance, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this._balance = balance;
    this.age = age;
  }
  getFullName() {
    return `User - ${this.firstName} ${this.lastName}`;
  }
  getAge() {
    return `I'm ${this.age} years old ...`;
  }
  setBalance(value) {
    if (typeof value === 'number') {
      this.balance += value;
    }
  }

  //   properties
  get greet() {
    return 'Greeting';
  }
  get balance() {
    return this._balance;
  }
  set balance(value) {
    if (typeof value === 'number') {
      this._balance += value;
    }
  }
}

// const newUser = new Person('jano', 'bokuchava', 100, 24);
// newUser.setBalance('2000');

// get balance
// console.log(newUser.greet);
// newUser.balance = '1000';

// newUser.newProp = 'new property';
// newUser.firstName = 'jano';
// newUser.lastName  = 'bokuchava';
// newUser.isAdmin = false;
// newUser.age = 24;

// const superMan = new Person('super', 'man', true, 30);
// console.log(newUser);
// console.log(superMan);

const numbers = [1, 2, 3, 4, 5, 7, 8, 9];
// numbers.push(14);
numbers.unshift(14);
console.log(numbers);
// const removed = numbers.pop();
const removed = numbers.shift();
// numbers.push(16);
// numbers.unshift(16);

// console.log(numbers);
// numbers[3] = 56;
// numbers[numbers.length] = 14;

// const nums = new Array(8);
// console.log(nums);

// console.log(numbers.length);
// console.log(numbers[5]);
// let sum = 0;

// const MAX_NUMBER = 1000;
// let index = 1;
// while (1 > 2) {
//   console.log('Sesrulda while');
//   sum += index++;
//   if (sum > MAX_NUMBER) break;
// }
// console.log(index);
// console.log(sum);

// do {
//   console.log('Shesrulda do while');
// } while (1 > 2);

/*

let countInteration = 0;
for (let index = 0; index < numbers.length; index++) {
  if (numbers[index] % 2 === 0) {
    sum += numbers[index];
  }
  //   for (let i = 0; i < numbers.length; i++) {
  //     countInteration++;
  //   }
}
console.log(countInteration);
console.log(sum);
*/
