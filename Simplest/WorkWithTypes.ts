class WorkWithTypes {

  public Union(): void {
    //Объединения или union не являются собственно типом данных, 
    //но они позволяют определить переменную, которая может 
    //хранить значение двух или более типов:

    let id: number | string;

    id = "1234dgg5";
    console.log(id); //1234dgg5

    id = 234;
    console.log(id); //234

    // Чтобы определить все типы, которые должно представлять перечисление, 
    // все эти типы разделяются прямой чертой: number | string. В данном 
    // случае переменная id может представлять как тип string, то есть строку, так и число.
  }

  public TypeofTypeguards(): void {
    let sum1: any;
    sum1 = 1200;
    sum1 = "тысяча двести";
    let result: number = sum1 / 12;
    console.log(result); // NaN - строку нельзя разделить на число

    //check type
    let sum: any;
    sum = 1200;

    if (typeof sum === "number") { //typeof return name of variable
      let result: number = sum / 12;
      console.log(result);
    }
    else {
      console.log("invalid operation");
    }
  }

  public Alias(): void {
    type stringOrNumberType = number | string;
    let sum: stringOrNumberType = 36.6;

    if (typeof sum === 'number') {
      console.log(sum / 6);
    }
  }

  public TypeCast(): void {
    //first option - < >
    let someAnyValue1: any = "hello world!";
    let strLength1: number = (<string>someAnyValue1).length; // < >
    console.log(strLength1); // 12

    let someUnionValue1: string | number = "hello work";
    strLength1 = (<string>someUnionValue1).length;
    console.log(strLength1); // 10

    //second option - as
    let someAnyValue2: any = "hello world!";
    let strLength2: number = (someAnyValue2 as string).length;
    console.log(strLength2); // 12

    let someUnionValue2: string | number = "hello work";
    strLength2 = (someUnionValue2 as string).length;
    console.log(strLength2); // 10
  }
}

