//extends
class Person1 {
 
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }

    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}
 
class Employer extends Person1 {
 
    company: string;
    
    // Переопределение конструктора
    constructor(userName: string, empCompany: string) {
        super(userName); //must be call constructor of base class
        this.company = empCompany;
    }

    work(): void {
        console.log(this.name + " работает в компании " + this.company);
    }
}

//another type  of extends
let Employee1 = class extends Person1 {
    
    company: string;

    constructor(userName: string, empCompany: string) {
        super(userName); 
        this.company = empCompany;
    }

    work(): void {
        console.log(this.name, "работает в компании", this.company);
    }
}


//override
class Person2 {
  
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }

    getInfo(): void {
        console.log("Имя: " + this.name);
    }
}
  
class Employee2 extends Person2 {
  
    company: string;
    constructor(userName: string, empCompany: string) {
        super(userName);
        this.company = empCompany;
    }

    getInfo(): void {
        //console.log("Имя: " + this.name);
        super.getInfo()
        console.log("Работает в компании: " + this.company);
    }
}

let bill: Employee2 = new Employee2("Bill", "Apple");
bill.getInfo();


//abstract
abstract class Figure {
    abstract getArea(): void;
}
// let someFigure = new Figure()    // Ошибка!

class Rectangle extends Figure{
     
    constructor(public width: number, public height: number){ 
        super(); //must call constructor of base even when it is empty
    }
     
    getArea(): void{
        let square = this.width * this.height;
        console.log("area =", square);
    }
}
 
let someFigure: Figure = new Rectangle(20, 30)
someFigure.getArea();   // area = 600
