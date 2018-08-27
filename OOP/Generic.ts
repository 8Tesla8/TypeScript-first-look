function getId<T>(id: T): T {
     
    return id;
}
let rs1 = getId<number>(5);
console.log(rs1);

let rs2 = getId<string>("abc");
console.log(rs2);


//generic arrays
function getString<T>(arg: Array<T>): string {
    let result = "";
    for (let i = 0; i < arg.length; i++) {
        if (i > 0)
            result += ",";
        result += arg[i].toString();
    }
    console.log(result);
    return result;
}
 
let rs3 = getString<number>( [1, 2, 34, 5]);
console.log(rs3);


// Обобщенные классы и интерфейсы
class GenericClass<T> {
 
    private _id: T;

    constructor(id:T) {
        this._id=id;
    }

    getId(): T {
        return this._id;
    }
}
 
let tmGen = new GenericClass<number>(3);
console.log(tmGen.getId()); // возвращает number
 
let alGen = new GenericClass<string>("vsf");
console.log(alGen.getId()); // возвращает string

// Только в данном случае надо учитывать, что если мы типизировали объект 
// определенным типом, то сменить данный тип уже не получится. То есть в 
// следующем случае второе создание объекта не будет работать, так как объект 
// tmGen уже типизирован типом number:

// tmGen = new GenericClass<string>("vsf"); // ошибка


interface IUserGen<T> {
    getId(): T;
}
 
class UserG<T> implements IUserGen<T> {
 
    private _id: T;
    
    constructor(id:T) {
        this._id=id;
    }

    getId(): T { 
        return this._id;
    }
}


//ограничения <T extends TypeName>
interface IUserG {
    getInfo() : any;
}

class Usr implements IUserG {
 
    _id: number;
    _name: string;

    constructor(id:number, name:string) { 
        this._id = id;
        this._name = name;
    }

    getInfo() {
        console.log("id: " + this._id + "; name: " + this._name);
    }
}

class UserInfo<T extends IUserG>{
 
    getUserInfo(user: T): void{
        user.getInfo();
    }
}


//new 
// Чтобы создать новый объект в коде обобщений, нам надо указать, 
// что обобщенный тип T имеет конструктор. Это означает, что вместо параметра 
// type:T нам надо указать type: {new(): T;}. Например, следующий обобщенный 
// интерфейс работать не будет:

// function UserFactory<T>(): T {
//     return new T(); // ошибка компиляции
// }

function userFactory<T>(type: { new (): T; }): T { 
    return new type();
}
 
 
class Ur {
    constructor() {
        console.log("создан объект Ur");
    }
}
 
let ur : Ur = userFactory(Ur);

