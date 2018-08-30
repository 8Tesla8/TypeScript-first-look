// Определение модуля и экспорт

interface Device{
  name: string;
}
   
class Phone implements Device {
  name: string;
  constructor(n:string){
      this.name = n;
  }
}
   
function Call(phone: Phone) : void{
  console.log("Make a call by", phone.name);
}

// При экспорте можно определить псевдоним для типа с помощью ключевого слова as. 
// Это имя затем может применяться при импорта класса.
export {Device, Phone, Call as Devices} // экспортировать все сущности


// Импорт
// Чтобы задействовать модуль в приложении, его надо импортировать с помощью оператора 
// import. Например, импортируем класс Phone и функцию Call из выше определенного 
// модуля devices.ts:

// import {Phone, Call} from "./devices";
// let iphone: Phone = new Phone("iPhone X");
// Call(iphone);

// После слова import определяется набор импортируемых типов - класов, интерфейсов, функций, 
// объектов. А после слова from указывается путь к модулю. В данном случае модуль 
// располагается в файле devices.ts, который находится в той же папке, поэтому в начале 
// пути ставится точка и далее указывается название файла без расширения. Если бы 
// модуль располагался бы в папке lib, находящеся в текущем каталоге, то название 
// папки также бы включалось в путь к модулю: "./lib/devices".

// Опять же с помощью оператора as можно указать псевдоним для типа:
// import {Phone, Call as makeCall} from "./devices";
// let iphone: Phone = new Phone("iPhone X");
// makeCall(iphone);

// Можно импортировать сразу весь модуль:
// import * as dev from "./devices";
// let iphone: devPhone = new dev.Phone("iPhone X");
// dev.Call(iphone);
// В данном случае модуль импортируется через псевдоним "dev". И, используя этот псевдоним, 
// мы можем обращаться к расположенным в этом модуле типам.


// Экспорт по умолчанию
// Параметры экспорта по умолчанию позволяют определить тип, который будет импортироваться 
// из модуля по умолчанию. К примеру, добавим новый модуль smartwatch.ts:
// export default class SmartWatch{
//     model:string;
// }

// Ключевое слово default позволяет установить класс SmartWatch в качестве типа по умолчанию. 
// И затем мы можем импортировать его следующим образом:
// import SmartWatch from "./smartwatch";
// let iwatch: SmartWatch = new SmartWatch();

