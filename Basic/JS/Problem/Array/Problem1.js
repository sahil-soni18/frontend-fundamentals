
let array = [8, 0, 10, 15, 0, 4, 0];
const array1 = [4, 12, 16];

// Part 0

const min = Math.min(...array);
const max = Math.max(...array);

console.log(`Min: ${min} & Max: ${max}...`);

// Part 1

console.log(array.includes(18));

// Part 2

const Sum = array.reduce((acc, cur) => acc + cur);

console.log(`The Sum is: ${Sum}`);

// Part 3


const commons = array.filter(el => array1.includes(el));


console.log(`The Common Elements in Both The Arrays is: ${commons}...`);

// Part 4

let commonElements = [];

for(let i = 0; i < array.length; i++ ) {
    for ( let j = 0; j < array.length; j++ ) {
        if ( i != j && array[i] == array[j] && !commonElements.includes(array[i]) ) commonElements.push(array[i]);
    }
}

const newArray = array.filter((element, index) => array.indexOf(element) === index);



console.log(`Array after Removing Duplicates is: ${newArray}...`);


// Part 5

let largestSum = 0;

for ( let i = 0; i < array.length; i++ ) {
    for ( let j = i + 1; j < array.length; j++ ) {
        let sum = array[i] + array[j];
        if ( sum > largestSum ) largestSum = sum;
    }
}

console.log(`The largest Sum is: ${largestSum}...`);


// Part 6

console.log(`The Reverse of the array is: ${array.reverse()}`);


// Part 7

const zeroArray = [];
const nonZeroArray = [];

array.map(element => {
    if (element != 0 ) nonZeroArray.push(element);
    else zeroArray.push(element);
})

nonZeroArray.push(zeroArray);

array = nonZeroArray.flat();

console.log(`Zeroes Moves to end: ${array}...`);