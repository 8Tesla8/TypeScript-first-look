class User4 {
    name: string;

    constructor(userName: string) {
        this.name = userName;
    }
}

class Employee4 extends User4 {
    company: string;

    constructor(employeeCompany: string, userName: string) {
        super(userName);
        this.company = employeeCompany;
    }
}

let alc: User4 = new Employee4("Microsoft", "Alice");

// преобразование к типу Employee
let alcEmployee1: Employee4 = <Employee4>alc;
let alcEmployee2: Employee4 = alc as Employee4;

console.log(alcEmployee1.company);
console.log((<Employee4>alc).company);
console.log((alc as Employee4).company);


interface IUser4 {
    name: string;
}

function getUserName(user: IUser4): string {
    return user.name;
}

let alc4: User4 = new Employee4("Microsoft", "Alice");
console.log(getUserName(alc4));

console.log(getUserName({ name: "Tom" }));
// console.log(getUserName({ name: "Bob", company:"Microsoft" })); // ошибка

//Ни класс User, ни класс Employee не применяют интерфейс IUser, однако мы можем их использовать, 
//так как они имеют все те же свойства и методы, что интерфейс IUser (в данном случае только свойство name).

//Объект { name: "Tom" } также является объектом интерфейса, так как он имеет свойство name. 
// В то же время при передаче объекта { name: "Bob", company:"Microsoft" } мы получим ошибку, 
// так как он уже расширяет возможности IUser, добавляя свойство company и напрямую интерфейсу IUser 
// не соответствует. Но даже в этом случае мы его можем вполне использовать, применив преобразование типов:
console.log(getUserName({ name: "Bob", company: "Microsoft" } as IUser4)); // Bob


// Оператор instanceOf
// С помощью оператора instanceOf можно проверить, принадлежит ли объект определенному классу:

let al: Employee4 = new Employee4("Microsoft", "Alice");
if (al instanceof User4) {
    console.log("Alice is a User");
}
else {
    console.log("Alice is not a User");
}
