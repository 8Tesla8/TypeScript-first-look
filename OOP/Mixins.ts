class Animal {
 
    feed():void {
        console.log("кормим животное");
    }
}

class MyTransport {
 
    speed: number=0;
    move(): void {
        if (this.speed == 0) {
            console.log("Стоим на месте");
        }
        else if (this.speed > 0) {
            console.log("Перемещаемся со скоростью " + this.speed + " км/ч");
        }
    }
}
 
class Horse implements Animal, MyTransport {
    speed: number=0;
    feed: () => void;
    move: () => void;

    constructor() {
       this.feed = ()=> {};
       this.move = ()=> {};
    }
}
 
function applyMixins(derivedCtor: any, baseCtors: any[]) {
    baseCtors.forEach(baseCtor => {
        Object.getOwnPropertyNames(baseCtor.prototype).forEach(name => {
            derivedCtor.prototype[name] = baseCtor.prototype[name];
        });
    });
}
 
applyMixins(Horse, [Animal, MyTransport]);
 
let pony: Horse = new Horse();
pony.feed();
pony.move();
pony.speed = 4;
pony.move();


// Для наследования функционала классов в определении миксина-класса Horse применяется ключевое слово 
// implements, после которого идет перечисление наследуемых классов. Сам класс Horse при этому должен 
// определить все те свойства и методы, которые определены в примененных классах. При этом вместо 
// полного описания методов используется определение функции: feed: () => void;. Сама реализация 
// будет браться из родительского класса.

// Но чтобы миксин мог унаследовать функционал, этого недостаточно. Нам еще надо использовать 
// специальную функцию, которая перекопирует функционал из родительских классов в миксин:
// function applyMixins(derivedCtor: any, baseCtors: any[])

// Затем применяем эту функцию:
// applyMixins(Horse, [Animal, Transport]);
// Первым параметром идет класс-миксин, а второй параметр - массив применяемых классов.

// Несмотря на то, что таким образом мы все таки можем применить множественное наследование, 
// но все же данный способ имеет ряд ограничений:
// - Миксин может унаследовать только те свойства и методы, которые непосредственно определены 
// в применяемом классе. Поэтому данный способ не будет работать, если применяемый класс, в свою 
// очередь, также наследует какие-то свойства и методы от другого класса.
// - Если родительские классы определяют метод с одним и тем же именем, то миксин наследует 
// только тот метод, который копируется в него последним в функции applyMixins.
