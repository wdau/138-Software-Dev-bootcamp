const numbers = [1, 2, 3, 4, 5];

// forEach Example 1: Logging each number multiplied by 3
console.log("forEach Example 1:");
numbers.forEach(number => console.log(number * 3));

// forEach Example 2: Logging each number plus 10
console.log("\nforEach Example 2:");
numbers.forEach(num => console.log(num + 10));

// map Example 1: Doubling each number
console.log("\nMap Example 1:");
const doubled = numbers.map(number => number * 2);
console.log(doubled);

// map Example 2: Converting numbers to strings
console.log("\nMap Example 2:");
const stringNumbers = numbers.map(num => `Number: ${num}`);
console.log(stringNumbers);

// filter Example 1: Filtering for even numbers
console.log("\nFilter Example 1:");
const evenNumbers = numbers.filter(number => number % 2 === 0);
console.log(evenNumbers);

// filter Example 2: Filtering for numbers greater than 2
console.log("\nFilter Example 2:");
const greaterThanTwo = numbers.filter(num => num > 2);
console.log(greaterThanTwo);

// reduce Example 1: Summing all numbers
console.log("\nReduce Example 1:");
const sum = numbers.reduce((total, number) => total + number, 0);
console.log("Sum:", sum);

// reduce Example 2: Multiplying all numbers
console.log("\nReduce Example 2:");
const product = numbers.reduce((total, num) => total * num, 1);
console.log("Product:", product);


// map vs foreach

// forEach
// Purpose: Executes a provided function once for each array element.
// Return Value: forEach does not return a new array; it returns undefined.
// Using forEach to log each number

numbers.forEach(number => console.log(number * 2));

// map
// Purpose: Applies a function to each element of the array and returns a new array containing the transformed elements.
// Return Value: map returns a new array of the same length as the original array, with each element transformed based on the function provided.

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);
