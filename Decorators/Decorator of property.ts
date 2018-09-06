// Декораторы свойств
// Декоратор свойства представляет функцию, которая принимает два параметра:
function MyPropertyDecorator(target: Object, propertyKey: string){
    // код декоратора
}

// Где первый параметр представляет конструктор класса, если свойство статическое, 
// либо прототип класса, если свойство нестатическое. А второй параметр представляет имя свойства.

// Определим простейший декоратор для свойства:
function format(target: Object, propertyKey: string){
     
    let _val = this[propertyKey];   // получаем значение свойства
 
    // геттер
    var getter = function () {
        return "Mr./Ms." + _val;
    };
  
    // сеттер
    var setter = function (newVal) {
        _val = newVal;
    };
  
    // удаляем свойство
    if (delete this[propertyKey]) {
  
        // И создаем новое свойство с геттером и сеттером
        Object.defineProperty(target, propertyKey, {
            get: getter,
            set: setter
        });
    }
}
 
class PropDecorator {
 
    @format
    name: string;
    constructor(name: string){
        this.name = name;
    }
    print():void{
        console.log(this.name);
    }
}
let tPD = new PropDecorator("Tom");
tPD.print();
tPD.name = "Tommy";
tPD.print();

// Декоратор format выполняет небольшое форматирование значение свойства. Для этого вначале мы получаем значение свойства. 
// Создаем геттер, который возвращает отформатированное значение. Далее определяется сеттер, который устанавливает новое значение для свойства.
// И в конце удаляется старое свойство и создается новое с геттером и сеттером.


// Декоратор метода доступа
// Декоратор метода доступа принимает три параметра:
function decorator(target: Object, propertyName: string, descriptor: PropertyDescriptor){ 
    // код декоратора
}

// Первый параметр представляет конструктора класса для статического метода, либо прототип класса для обычного метода.
// Второй параметр представляет название метода.
// Третий параметр представляет объект PropertyDescriptor.

// Определим простейший декоратор метода доступа:
function validator(target: any, propertyKey: string, descriptor: PropertyDescriptor) {
    const oldSet = descriptor.set;
 
    descriptor.set = function(value: string) {
        if (value === "admin") {
            throw new Error("Invalid value");
        }
 
        oldSet.call(this, value);
    }
}
class SetPropDecor {
 
    private _name: string;
    constructor(name: string){
        this.name = name;
        this._name = '';
    }
     
    public get name(): string {
        return this._name;
    }
    @validator
    public set name(n: string) {
        this._name = n;
    }
}
let tDP1 = new SetPropDecor("Tom");
tDP1.name= "admin";
console.log(tDP1.name);

// Декоратор validator переопределяет поведение сеттера с помощью свойства descriptor.set. 
// Если передаваемое сеттеру значение представляет строку "admin", то генерируется ошибка.

// Декоратор достаточно применить только к геттеру или к сеттеру, в любом случае он будет сразу применяться к обоим аксессорам.
