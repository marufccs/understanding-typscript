//void is that type of function which doesn't return anything.If returns, it's undefined.
function printResult(num: number): void {
  console.log("Result :" + num);
}

printResult(add(5, 12));

function add(n1: number, n2: number) {
  return n1 + n2;
}
//Function as a value
let combineValues: (a: number, b: number) => number;
combineValues = add;
console.log(combineValues(9, 9));

//Callback
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addAndHandle(10, 20, (result) => {
  console.log(result);
});
