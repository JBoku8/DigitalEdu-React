let message = 'Welcome to ES2019'; // String, char => 'A'

const TAX = 20; // 20%
const isAdmin = false; // true;

// ASI
let text = 'text';
let otherText = 'otherText';


// camelCase
// PascalCase
// snake_case
// kebab-case

// BEM
// console.log(typeof message)
// console.log(typeof TAX)
// console.log(typeof isAdmin)

// Types
// javascript coercion
// const amount = '100234';
// const balanace = 345;
// 100 + 345
// console.log(parseInt(amount, 10) + balanace)

const numberFirst = 20;
const numberSecond = 40;

// >,<,<=, >=, ==, ===, != , !==, !
// console.log(numberFirst == numberSecond)

// && and
// || OR

// if (!(numberFirst > 10 && numberSecond < 50)) {
//   console.log('numberFirst > 10 && numberSecond <  50');
// }
// else if( numberFirst >= 20 && numberSecond <= 40 ) {
//     console.log("numberFirst >= 20 && numberSecond <= 40")
// }
// else {
//   console.log('!(numberFirst > 10 && numberSecond <  50) Else');
// }

// !(numberFirst > 10 && numberSecond < 50)
//   ? console.log('numberFirst > 10 && numberSecond <  50')
//   : console.log('!(numberFirst > 10 && numberSecond <  50) Else');

//  (condition) ? actionTrue : actionFalse;

// const language = "HTML";
// switch(language){
//     case "JS":
//         console.log("Javascript is programming language");
//         break;
//     case "HTML":
//         console.log("HTML is HyperText Markup Language");
//         break;
//     case "CSS3":
//         console.log("CSS is Cascading Style Sheets");
//         break;
//     default:
//         console.log("Unknown Language");
// }

const nameJohn = "John";
const ageJohn  = 27;

const nameAnna = "Anna";
const ageAnna  = 20;


const userJohn = {
    name: "John",
    age: 27
}

const userAnna = {
    name: "Anna",
    age: 20
}


function formatMessage(name, age) {
    console.log("[FormatMessage Function]");
    console.log(`${name} არის ${age} წლის...`)
}

// Key: value

// dot notation
// console.log(userAnna.age, userAnna.name)

// escaping \\
// console.log(userAnna.name + " არის " + userAnna.age + " წლის...")
// console.log(`${userAnna.name} "არის" ${userAnna.age} წლის...`)
formatMessage(userAnna.name, userAnna.age)


// console.log(userJohn)
formatMessage(userJohn.name, userJohn.age)

