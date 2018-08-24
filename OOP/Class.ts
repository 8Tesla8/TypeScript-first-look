class MyUser {
 
  id: number;
  name: string;
  
  constructor(userId: number, userName: string) {
      this.id = userId;
      this.name = userName;
  }

  getInfo(): string {
      return "id:" + this.id + " name:" + this.name;
  }
}

let ted: MyUser = new MyUser(1, "Ted");
console.log(ted.getInfo());
ted.id = 4;
 
let alice: MyUser = new MyUser(2, "Alice");
console.log(alice.getInfo());


//Статические свойства и функции
class Operation {
 
  static PI: number = 3.14;

  static getSquare(radius: number): number {
      return Operation.PI * radius * radius;
  }
}

let sq = Operation.getSquare(30);
console.log("Площадь круга с радиусом 30 равна " + sq);
let p = Operation.PI * 30 * 30;
console.log(p);   // 2826
