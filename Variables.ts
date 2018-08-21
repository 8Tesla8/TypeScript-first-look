class Valiables {
  public Variables(): void {
    //https://metanit.com/web/typescript/2.1.php

    var variable1 = 5;

    //it is better to use let
    let variable2 = 5;

    const variable3 = 5;
  }

  public Var(): void {
    //Применение let является более предпочтительным, поскольку 
    //позволяет избежать ряд проблем, связанных с объявлением 
    //переменных. В частности, с помощью var мы можем определить 
    //два и более раз переменную с одним и тем же именем:

    var x = "hello";
    console.log(x);
    var x = "work";
    console.log(x);
  }

  public Let(): void {
    //Если программа большая, то мы можем не уследить за тем, 
    //что такая переменная уже объявлена, что является 
    //источником потенциальных ошибок. Подобную проблему позволяет решить let:

    let x = "hello";
    console.log(x);

    // здесь будет ошибка, так как переменная x уже объявлена
    //let x = "work"; 
    console.log(x);
  }

  public VarVsLet(): void {
    // //var

    // //Доступна в любой части функции, в которой она определена.
    // function printV1() {
    //   if (1) {
    //     var x = 94;
    //   }
    //   console.log(x); // норм
    // }

    // //Можно использовать в функции перед определением.
    // function printV2() {
    //   console.log(x); // undefined, но норм
    //   var x = 76;
    // }

    //В одной и той же функции можно несколько раз определить 
    //переменную с одним и тем же именем.
    function printV3() {
      var x = 72;
      console.log(x); // 72
      var x = 24;     // норм
      console.log(x); // 24
    }


    // //let /const
    // //Доступна только в рамках блока, в котором она определена
    // function printL1() {
    //   if (1) {
    //     let x = 94;
    //   }
    //   console.log(x); // ! Ошибка
    // }

    // //Можно использовать только после определения.
    // function printl2() {
    //   console.log(x); // ! Ошибка
    //   let x = 76;
    // }

    // //В одной и той же функции можно только один раз определить 
    // //переменную с одним и тем же именем.
    // function print() {
    //   let x = 72;
    //   console.log(x); // 72
    //   let x = 24;     // ! Ошибка
    //   console.log(x);
    // }
  }
}

