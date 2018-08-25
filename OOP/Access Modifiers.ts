//ts have 3 Access Modifiers
//public, protected и private

//default Access Modifiers is public

class Person {  
  //name: string; //public
  //year: number; //public
     
  private _name: string;
  private _year: number;

  constructor(name: string, age: number) {
      this._name = name;
      this._year = this.setYear(age);
  }

  public displayYear(): void {
      console.log("Год рождения: " + this._year);
  }

  public displayName(): void {
      console.log("name: " + this._name);
  }

  private setYear(age: number): number {
      return new Date().getFullYear() - age;
  }
}

let t = new Person("Tom", 24);
t.displayName();
t.displayYear();
// console.log(tom._name); // нельзя обратиться, так как _name - private
// tom.setYear(45); // нельзя обратиться, так как функция - private


class Human {
    private name: string;
    protected age: number;

    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
    public displayInfo(): void {
 
        console.log("name: " + this.name + "; age: " + this.age);
    }  
}

class Employee extends Human {
 
    private company: string;
    constructor(name: string, age: number, company: string) {
        super(name, age);
        this.company = company;
    }
    public showData(): void {
        console.log("Age: " + this.age);
        //console.log("Name: " + this.name); // не работает, так как name - private
    }
}

//Определение свойств через конструктор
class Modifier1 {
    constructor(private name: string, private age: number) { }
}

//Этот класс будет аналогичен следующему:
class Modifier2 {
    private _name: string;
    private _age: number;

    constructor(name: string, age: number) {
        this._name = name;
        this._age = age;
    }
}

//Используя модификаторы в параметрах конструктора, нам больше не надо явно 
//создать свойства для этих параметров. Свойства создаются автоматически, называются 
//они по имени параметров и имеют те же модификаторы, что и параметры.
//Подобным образом, если мы хотим сделать свойства публичными, то следует 
//использовать модификатор public:
class Modifier3 {
    constructor(public name: string, public age: number) { }
}


// Интерфейсы массивов
// Интерфейсы массивов описывают объекты, к которым можно обращаться по индексу, 
// как, например, к массивам
interface StringArray {
    [index: number]: string;
}
 
let phones: StringArray;
phones = ["iPhone 7", "HTC 10", "HP Elite x3"];
 
let myPhone: string = phones[0];
console.log(myPhone);

// Здесь определен интерфейс StringArray, который содержит сигнатуру массива. 
// Эта сигнатура указывает, что объект, который реализует StringArray, может 
// индексироваться с помощью чисел (объекта типа number). И, кроме того, данный 
// объект должен хранить объекты типа string, то есть строки.
// Выше индекс представлял тип number. Но мы можем использовать для индексации и тип string:
interface Dictionary {
    [index: string]: string;
}
 
var colors: Dictionary = {};
colors["red"] = "#ff0000";
colors["green"] = "#00ff00";
colors["blue"] = "#0000ff";
 
console.log(colors["red"]);

// Гибридные интерфейсы
// Интерфейсы могут сочетать различные стили, могут применяться сразу как к определению 
// объекта, так и к определению функции:
interface PersonInfo {
    (name: string, surname: string):void;
    fullName: string;
    password: string;
    authenticate(): void;
}
 
function personBuilder(): PersonInfo {
 
    let person = <PersonInfo>function (name: string, surname: string): void{
        person.fullName = name + " " + surname;
    };
    person.authenticate = function () {
        console.log(person.fullName + " входит в систему с паролем " + person.password);
    };
    return person;
}
 
let t4 = personBuilder();
t4("Tom", "Simpson");
t4.password = "qwerty"; 

// Тип функции, определяемый в таком гибридном интерфейсе, как правило, 
// выступает в роли конструктора объекта. В данном случае такой конструктор 
// имеет тип (name: string, surname: string):void;.

// А функция, которая представляет данный интерфейс (в данном случае - функция 
// personBuilder), реализует эту функцию конструктора, и также может 
// использовать другие свойства и методы, которые были определены в интерфейсе.
