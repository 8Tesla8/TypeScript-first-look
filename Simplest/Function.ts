class Functions {
}

//JS function
// function add(a, b) {
//   return a + b;
// }

//like in JS
function add1(a: number, b: number): number {
  return a + b;
}

let result1 = add1(1, 2);
console.log(result1);


//опредилили функцию как переменную и затем через переменной 
//вызываем данную функцию:
let add2 = function (a: number, b: number) : number {
  return a + b;
}
let result2 = add2(1, 2);


//Можено не указывать тип, тогда он будет выводиться 
//неявно на основе возвращаемого значения:
function add3(a: number, b: number) {
  return a + b;
}
let result = add3(10, 20);


//Необязательные параметры должны быть помечены вопросительным 
//знаком ?. Причем необязательные параметры должны идти после обязательных
function getName1(firstName: string, lastName?: string) {
  if (lastName)
      return firstName + " " + lastName;
  else
      return firstName;
}

let name11 = getName1("Иван", "Кузнецов");
console.log(name11); // Иван Кузнецов
let name12 = getName1("Вася");
console.log(name12); // Вася


//Параметры по умолчанию
function getName2(firstName: string, lastName: string="Иванов") {
  return firstName + " " + lastName;
}

let name21 = getName2("Иван", "Кузнецов");
console.log(name21); // Иван Кузнецов
let name22 = getName2("Вася");
console.log(name22); // Вася Иванов

//В качестве значения можно передавать результат другого выражения:
function defaultSurname(): string{
  return "Smith";
}

function getName3(firstName: string, lastName: string=defaultSurname()) {
  return firstName + " " + lastName;
}

let name31 = getName3("Tom");
console.log(name31); // Tom Smith


//Неопределенный набор параметров
function addNumbers(firstNumber: number, ...numberArray: number[]): number {
  let result = firstNumber;
  for (let i = 0; i < numberArray.length; i++) {
      result+= numberArray[i];
  }
  return result;
}

let num1 = addNumbers(3, 7, 8);
console.log(num1); // 18

let num2 = addNumbers(3, 7, 8, 9, 4);
console.log(num2); // 31


//Перегрузка функций
//Для перегрузки вначале опеределяем все версии функции, которые не будут 
//иметь никакой логики. А потом определяем версию функции с общей 
//сигнатурой, которая подходит под все ранее определенные варианты. 
//И в этой общей версии уже определяем конкретную логику функции.
function add(x: string, y: string): string;
function add(x: string, y: string): number;
function add(x: number, y: number): number;
function add(x: any, y: any): any {
    return x + y;
}
 
let result11 = add(5, 4);
console.log(result11);   // 9
let result12 = add("5", "4");
console.log(result12);   // 54


