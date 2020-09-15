// 函数参数和返回类型的注解


// function getTotal(one:number, two:number): number {
//   return one + two;
// }

// const totals = getTotal(1, 2);

// function sayHello(): void {
//   console.log('Hello world');
// }

// function errorFunction(): never {
//   throw new Error();
//   console.log('Hello World!');
// }

// function forNever(): never {
//   while(true) {
    
//   }
//   console.log('2222')
// }

// function add({one, two}: {one: number, two: number}) {
//   return one + two
// }

// const total1 = add({one: 1, two: 2})

function getNumber({one}: {one: number}) {
  return one;
}

const one1 = getNumber({one: 1})