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
