interface IUser {
    id: number;
    name: string;
}

//must implement all properties 
let employee: IUser = {     
    id: 1, 
    name: "Tom"
}

console.log("id: " + employee.id);
console.log("name: " + employee.name);


// Необязательные свойства 
interface IUser1 {
    id: number;
    name: string;
    age?: number; // Необязательные свойства

    getFullName(surname: string): string;
}
// Свойство age помечено как необязательное, поэтому его можно не определять в объектах.

// Объект который реализует интерфейс, также обязан реализовать определенную 
//в интерфейсе функцию с тем же набором параметров и тем типом выходного результата.

let employee1: IUser1 = {
    id: 1, 
    name: "Alice",
    age: 23,
    getFullName : function (surname: string): string {
        return this.name + " " + surname + " " + this.age;
    }
}

let manager: IUser1 = { 
    id: 2, 
    name: "Tom",
    getFullName : function (surname: string): string {
        return this.name + " " + surname;
    }
}

// Cвойства только для чтения
interface Point {
    readonly x: number;
    readonly y: number;
}
let p1: Point = { x: 10, y: 20 };
console.log(p1);
// p.x = 5; // Ошибка - свойство доступно только для чтения


// implements
interface IUser2 {
    id: number;
    name: string;
    getFullName(surname: string): string;
}
 
class User2 implements IUser2, User{
 
    id: number;
    name: string;
    age: number;
    
    constructor(userId: number, userName: string, userAge: number) {
        this.id = userId;
        this.name = userName;
        this.age = userAge;
    }

    getFullName(surname: string): string {
        return this.name + " " + surname;
    }
}
 
let t3 = new User2(1, "Tom", 23);
console.log(t3.getFullName("Simpson"));

//Интерфейсы, как и классы, могут наследоваться:
interface IMovable {
    speed: number;
    move(): void;
}

interface ICar extends IMovable {
    fill(): void;
}

class Car implements ICar {
    
    speed: number;
    
    constructor(speed: number){
        this.speed = speed;
    }

    move(): void {
        console.log("Машина едет со скоростью " + this.speed + " км/ч");
    }
 
    fill(): void {
        console.log("Заправляем машину топливом");
    }
}


// Интерфейсы функций
// Интерфейсы функций содержат определение типа функции. Затем они должны быть 
//реализованы объектом, который представляет функцию данного типа:
interface FullNameBuilder {
    (name: string, surname: string): string;
}
 
let simpleBuilder: FullNameBuilder = function (name:string, surname: string): string {
        return "Mr. " + name + " " + surname;
}
 
let fullName = simpleBuilder("Bob", "Simpson");
console.log(fullName); // Mr. Bob Simpson


// Интерфейсы массивов
// Интерфейсы массивов описывают объекты, к которым можно обращаться по 
// индексу, как, например, к массивам

