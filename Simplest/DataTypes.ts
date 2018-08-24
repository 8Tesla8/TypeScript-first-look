
class DataTypes {

  public AllTypes(): void {
    // Boolean: логическое значение true или false

    // Number: числовое значение    

    // String: строки

    // Array: массивы

    // Tuple: кортежи    

    // Enum: перечисления

    // Any: произвольный тип

    // Null и undefined: соответствуют значениям null и undefined в javascript

    // Void: отсутствие конкретного значения, используется в основном в 
    //качестве возвращаемого типа функций

    // Never: также представляет отсутствие значения и используется в качестве 
    //возвращаемого типа функций, которые генерируют или возвращают ошибку

    let numb: number = 10;
    let hello: string = "hello world";
    let hello1 = "hello world";

    let isValid: boolean = true;

    // тип any
    let x;
    x = 10;
  }

  public Number(): void {
    //Number
    //Тип Number представляет числа, причем все числа в TypeScript, как и в JavaScript, 
    //являются числами с плавающей точкой. TS поддерживает двоичную, восьмеричную, 
    //десятичную и шестнадцатиричную записи чисел:
    let decimal: number = 6;
    let hex: number = 0xf00d;
    let binary: number = 0b1010;
    let octal: number = 0o744;

  }

  public String(): void {
    //String
    //Кроме того, TypeScript поддерживает такую функциональность, как шаблоны строк, 
    //то есть мы можем задать шаблон в косых кавычках (`), как если бы мы писали обычную 
    //строку, и затем в саму строку можно встраивать разные выражения с помощью 
    //синтаксиса ${ expr }, где expr - это выражение. 
    let firstName: string = "Tom";
    let age: number = 28;
    let info: string = `Имя ${firstName}    Возраст: ${age}`;
    console.log(info);  // Имя Tom    Возраст: 28

    //Косые кавычки также можно применять для установки многострочного текста:
    let sentence: string = `Hello World!
    Goob bye World!`;

  }


  public NullAndUndefined(): void {

    let a: undefined = undefined;
    let b: null = null;

    //Но фактически мы можем присваивать значения undefined и null переменным 
    //других типов, например, number:

    // let x: number = undefined;
    // console.log(x);
    // x = null;
    // console.log(x);
    // x = 5;
    // console.log(x);

    //В этом плане null и undefined выступают как подтипы других типов и полезны 
    //преимущественно в каких-то операциях, где неизвестен результат - то ли 
    //это будет число или строка, то ли это будет null. В этом случае, 
    //чтобы избежать возможной ошибки, мы можем проверить значение на undefined или null, 
    //собственно как и в javascript.
  }

  public Arrays(): void {
    let list: number[] = [10, 20, 30];
    let colors: string[] = ["red", "green", "blue"];
    console.log(list[0]);   //10
    console.log(colors[1]); //green

    let array: any[] = [10, null, 'string'];

    //Альтернативный способ определения массивов представляет применение типа Array<>:
    let names: Array<string> = ["Tom", "Bob", "Alice"];
    console.log(names[1]);  // Bob
  }

  public Turple(): void {
    //Кортежи (Tuples) также, как и массивы, представляют набор элементов, для которых уже заранее известен тип. 

    // определение кортежа - кортеж состоит из двух элементов - строки и числа
    let userInfo: [string, number];
    // инициализация кортежа
    userInfo = ["Tom", 28];
    // Неправильная инициализация - переданные значения не соответствуют типам по позиции
    //userInfo = [28, "Tom"]; // Ошибка

    // использование кортежа
    console.log(userInfo[1]); // 28
    userInfo[1] = 37;

    console.log(userInfo[0]); // Tom

    let arrayTurple: Array<[string, number]> = new Array<[string, number]>();
  }

  public Enum(): void {
    enum Season { Winter = 0, Spring = 1, Summer = 2, Autumn = 45 };
    let current: Season = Season.Summer;
    console.log(current);
    current = Season.Autumn; // изменение значения

    let currentName: string = Season[2];    // 2 - числовое значение Summer
    console.log(currentName);   // Summer
  }

  public Any(): void {
    let someVar: any = "hello";
    console.log(someVar);   // сейчас someVar - это string
    someVar = 20;
    console.log(someVar);   // сейчас someVar - это number

    var arrayOfAny: any[] = [24, "Tom", false];
  }

  public AnonymousObject(): void {
    let person = { name: "Tom", age: 23 };
    console.log(person.name);
    // альтернативный вариант получения свойства
    console.log(person["name"]);

    let person1 = { name: "Tom", age: 23 };
    //second field must be initialize 
    //person1 = { name: "Alice" }; //error
  }
}
