// getter, setter

const helperFunctions = {
  getFullName() {
    return `User - ${this.firstName} ${this.lastName}`;
  },
};

function User(firstName, lastName, isAdmin, age) {
  let tempUser = {
    firstName,
    lastName,
    isAdmin,
    age,
    hi() {
      console.log('HI....');
    },
  };
  //   tempUser = Object.assign(tempUser, helperFunctions);
  tempUser.__proto__ = helperFunctions;
  return tempUser;
}

function Person(firstName, lastName, isAdmin, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.isAdmin = isAdmin;
  this.age = age;
}
Person.prototype.getFullName = function () {
  return `User - ${this.firstName} ${this.lastName}`;
};

Person.prototype.getAge = function () {
  return `I'm ${this.age} years old ...`;
};

/*
{
    firstName: 'John',
    lastName: 'Doe',
    isAdmin: false,
    age: 23
};
*/

/*
{
    firstName: 'Anna',
    lastName: 'Smith',
    isAdmin: true,
    age: 24
};
*/

/*
{
    firstName: 'Jecky',
    lastName: 'Chan',
    isAdmin: true,
    age: 27
};
*/

const john = new Person('John', 'Doe', false, 23);
const anna = new Person('Anna', 'Smith', true, 24);
const Jecky = new Person('Jecky', 'Chan', true, 60);

console.log(john.getFullName());
console.log(anna.getAge());
console.log(Jecky);
