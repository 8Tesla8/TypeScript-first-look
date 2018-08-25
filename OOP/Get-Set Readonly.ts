class GetSet {
 
    private _name: string;

    public get name(): string {
        return this._name;
    }
 
    public set name(n: string) {
        this._name = n;
    }
}
 
let tm = new GetSet();
tm.name = "Tom";        // срабатывает set-метод
console.log(tm.name);   // срабатывает get-метод


//readonly property
class Readonly1 {
 
    readonly id: number;
    name: string;

    constructor(userId: number, userName: string) {
        this.id = userId;
        this.name = userName;
    }
}
 
let rd: Readonly1 = new Readonly1(2, "Tom");
console.log(rd.id, rd.name);
//tom.id=34;    // Ошибка - так как id - только для чтения

// В данном случае свойство id доступно только для чтения. 
// Мы можем установить его значение только в конструкторе класса.
// Подобное определение свойств для чтения можно сократить следующим образом:
class Readonly2 {
    name: string;
    
    constructor(readonly id: number, userName: string) {
        this.name = userName;
    }
}
//Также мы можем вместе с модификатором readonly задать модификатор доступа.
