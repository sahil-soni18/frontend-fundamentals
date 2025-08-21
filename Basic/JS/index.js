// "use strict";

console.log(foo);
var foo = 1;
function foo() {}
console.log(foo);

// for ( var i = 0; i < 3; i++ ) {
//     setTimeout(() => console.log(i), 0);
// }

// for ( let i = 0; i < 3; i++ ) {
//     setTimeout(() => console.log(i), 0);
// }


randomVariable = 10;

console.log(randomVariable);


console.log("[] == ![]        →", [] == ![]);        // true
console.log("[1] == 1         →", [1] == 1);         // true
console.log("[0] == 0         →", [0] == 0);         // true
console.log("null == undefined→", null == undefined); // true
console.log("NaN == NaN       →", NaN == NaN);        // false
