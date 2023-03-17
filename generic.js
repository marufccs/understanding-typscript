"use strict";
//Generics
const names = []; // it's like string[]
names[0].split(" ");
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 2000);
});
promise.then((data) => { });
// Function Generics
function merge(objA, objB) {
    return Object.assign(Object.assign({}, objA), objB);
}
const mergedObj = merge({ name: "Max", hobbies: ["sports"] }, { age: 30 });
console.log(mergedObj);
function countAndDescribe(element) {
    let descriptionText = "Got no value";
    if (element.length === 1) {
        descriptionText = "Got 1 element";
    }
    else if (element.length > 1) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
