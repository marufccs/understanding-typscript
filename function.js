"use strict";
//void is that type of function which doesn't return anything.If returns, it's undefined.
function printResult(num) {
    console.log("Result :" + num);
}
printResult(add(5, 12));
function add(n1, n2) {
    return n1 + n2;
}
//Function as a value
let combineValues;
combineValues = add;
console.log(combineValues(9, 9));
//Callback
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addAndHandle(10, 20, (result) => {
    console.log(result);
});
