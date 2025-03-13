const processArray = (array, callback) => {
    return callback(array);
};

const getSum = arr => arr.reduce((acc, curr) => acc + curr, 0);
const getMin = arr => Math.min(...arr);
const getMax = arr => Math.max(...arr);

const numbers = [10, 5, 8, 3, 7, 12];

console.log("Сума елементів:", processArray(numbers, getSum)); // 45
console.log("Мінімальний елемент:", processArray(numbers, getMin)); // 3
console.log("Максимальний елемент:", processArray(numbers, getMax)); // 12



const operate = (a, b, callback) => callback(a, b);

const add = (a, b) => a + b;
const subtract = (a, b) => a - b;
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

console.log(operate(10, 5, add));      
console.log(operate(10, 5, subtract));
console.log(operate(10, 5, multiply)); 
console.log(operate(10, 5, divide));  
