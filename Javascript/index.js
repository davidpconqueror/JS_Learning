// Funcation declaration types

// 1. regular function
// function funtionName(params) {
//     // statements
//     // have access to "this" keyword
//     // return result
// }

// // 2. function expression
// // anonymous function
// const funtionName = function (params) {
//     // statements
//     // return result
// }

// // 3. arrow function
// const funtionName = (params) => {
//     // statements
//     // return result
    
// }

// function invoking

function sayHello(name) {
    console.log(`Hello ${name}`);
}
// sayHello('Nguyen Van A');

// every function return undefined unless you specify the return

function add(a, b) {
    console.log(a + b);
}

// const sum = add(1, 2);
// console.log(sum);

// Arrow function
const square = (x) => x * x;

const square1 = (x) => {
    return x * x;
}