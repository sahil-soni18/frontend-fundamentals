const arr = [1, 2, [3]];

const copiedArr = Array.from(arr);

console.log(arr);
console.log(copiedArr);

copiedArr[2][0] = 8;

console.log(arr);
console.log(copiedArr);


const concatedArray = arr.concat(copiedArr);

console.log(concatedArray);

// copyWithIn

const newArr = [18, 8, 2, 4];
const copyWithInArray = newArr.copyWithin(1, 2, 3);

console.log(` Copied Within Array: ${copyWithInArray}`);


// every()

const arr0 = [1, 2, 3, 4];

const EveryArr = arr0.every(value => value < 5);

console.log(EveryArr);


// flat

const arr2 = [0, 1, [2, [3, [4, 5]]]];

// console.log(arr2.flat().flat().flat());

console.log(arr2.flat(2))


// reduce

const arrayToReduce = [10, 9, 8, 7, 6, 5];

const result = arrayToReduce.reduce((acc, cur) => acc + cur);

console.log(result);