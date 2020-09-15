// typescript的静态类型和自定义静态类型

let count: number = 1;
// count = 'jspang';

interface Xiaojiejie {
  uname: string,
  age: number
}

const xiaohong: Xiaojiejie = {
  uname: '小红',
  age: 18
}

xiaohong.age = 2;
console.log(xiaohong)