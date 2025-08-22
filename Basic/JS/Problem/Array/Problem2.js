const array = [[0, 1, 2], [3, 1, 0, 4], [5,0, 6, 1]];
let array0 = [0, 1, 2, 3, 4, 6, 7];

// Part 0

let common = array[0];

for (let i = 1; i < array.length; i++) {
  common = common.filter(value => array[i].includes(value));
}


console.log(`The Smallest Common Element in All SubArrays: ${Math.min(...common)}`)

// Part 1

function rotateClockWise (arr, k ) {

    if ( k === 0 || arr.length === 0 ) return;

    const temp = arr[arr.length - 1];

    for ( let i = arr.length - 1; i > 0; i-- ) {
        arr[i] =  arr[i - 1];
    }

    arr[0] = temp;

    rotateClockWise(arr, k - 1);
}

console.log(`Array before Rotation: ${array0}`);

rotateClockWise(array0, 2);

console.log(`Array after Rotation: ${array0}`);


// Part 2


function findMissing(arr, n) {
    let l = 0, h = n - 1;
    let mid;

    while ( h > l ) {
        mid = l + Math.floor((h - l) / 2);

        if ( arr[mid] - mid == arr[0] ) {

            if ( arr[mid + 1] - arr[mid] > 1 ) return arr[mid] + 1;
            else l = mid + 1;
        }

        else {
            if ( arr[mid] - arr[mid - 1] > 1 ) return arr[mid] - 1;
            else h = mid - 1;
        }
    }

    return -1;
}

console.log(findMissing([...array0].sort((a,b)=>a-b), array0.length)); 


// Part 3

function findPair(arr, target) {

    
}