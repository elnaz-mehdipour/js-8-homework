// Using the .map() method, create a new array with numbers multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

let numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

const solutionOne = numbers.map(function num(number) {
    return number*100;
})
const solutionTwo = numbers.map(number => number*100)

const solutionThree = numbers.map(number => {
    return number*100;
})

console.log(solutionOne);
console.log(solutionTwo);
console.log(solutionThree);



