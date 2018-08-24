class LambdaFunction {
}

function sum(x: number, y: number): number {
  return x + y;
};
function subtract(a: number, b: number): number {
  return a - b;
};

//variable - pointer on function
let op: (x: number, y: number) => number;

op = sum;
console.log(op(2, 4));  // 6

op = subtract;
console.log(op(6, 4));  // 2


//Функции обратного вызова
//3 parameter is a pointer on function
function mathOp(x: number, y: number, operation: (a: number, b: number) => number): number {
  let result = operation(x, y);
  return result;
}
let operationFunc: (x: number, y: number) => number;
operationFunc = function (a: number, b: number): number {
  return a + b;
}
console.log(mathOp(10, 20, operationFunc)); // 30 

operationFunc = function (a: number, b: number): number {
  return a * b;
}
console.log(mathOp(10, 20, operationFunc)); // 200 

//Стрелочные функции
let sum1 = (x: number, y: number) => x + y;

let res = sum1(15, 35); // 50
console.log(res);

let hello = () => "hello world"

console.log(hello());   // hello world

//lambda-function send like a parameter
function mathOp2(x: number, y: number, operation: (a: number, b: number) => number): number {
  let result = operation(x, y);
  return result;
}
console.log(mathOp2(10, 20, (x, y) => x + y)); // 30 
console.log(mathOp2(10, 20, (x, y) => x * y)); // 200 

