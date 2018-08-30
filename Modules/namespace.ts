// Для организации больших программ предназначены пространства имен. Пространства имен содержат группу 
// классов, интерфейсов, функций, других пространств имен, которые могут использоваться в некотором общем контексте.

// Для определения пространств имен используется ключевое слово namespace:

// В данном случае пространство имен называется Personnel, и оно содержит класс Employee. 
// Чтобы типы и объекты, определенные в пространстве имен, были видны извне, они определяются с 
// ключевым словом export. В этом случае во вне мы сможем использовать класс Employee:

namespace Personnel {

  export class Employee {
    constructor(public name: string) {
    }
  }

  export interface IUser {
    displayInfo(): void;
  }

  export function work(emp: Employee): void {
    console.log(emp.name, "is working");
  }

  export let defaultUser = { name: "Kate" }
}

let tod = new Personnel.Employee("Tod")
Personnel.work(tod);                    // Tod is working

console.log(Personnel.defaultUser.name);    // Kate


// Вложенные пространства имен
namespace Data{
  export namespace Clients {
      export class VipClient {
          constructor(public name: string){
          }
      }
  }
}


// Псевдонимы для пространства именн
import vip = Data.Clients.VipClient;
let v = new vip("Tom")
console.log(v.name);

//После объявления псевдонима vip будет рассматриваться как краткое имя для Data.Clients.VipClient.
