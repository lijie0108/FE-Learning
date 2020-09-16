## 简介
## 什么是TypeScript?
  TypeScript是JavaScript的一个超集，主要提供了类型系统和对ES6的支持。

## 为什么选择TypeScript？
  TypeScript增加了代码的可读性和可维护性
  TypeScript非常包容
  TypeScript拥有活跃的社区

## 安装TypeScript
  npm install -g typescript
  tsc hello.ts

## Hello TypeScript
  function sayHello(person: string) {
      return 'Hello, ' + person
  }
  let user = 'Tom';
  console.log(sayHello(user));


## 基础
## 原始数据类型
  let isDone: boolean = false;
  let decLiteral: number = 6;
  let name: string = 'Tom';

  在TypeScript中，可以用void表示没有任何返回值的函数
  function alertName(): void {
    alert('My name is Tom')
  }
  let u: undefined = undefined;
  let n: null = undefined;

  let num: number = undefined;
  let num: number = null;
  let num: number = void; // 报错
## 任意值
  let myFavoriteNumber: string = 'sven';
  myFavoriteNumber = 7; // 报错

  let myFavoriteNumber: any = 'sven';
  myFavoriteNumber = 7;

  声明一个变量为任意值之后，对它的任何操作，返回的内容的类型都是任意值
  变量如何在声明的时候，未指定类型，那么它会被识别为任意值类型
## 类型推论
  如果没有明确的指定类型，那么TypeScript会依照类型推论的规则推断出一个类型
  let myFavoriteNumber = 'sven';
  myFavoriteNumber = 7; // 报错
  // 等价于
  let myFavoriteNumber: string = 'sven';

  如果定义的时候没有赋值，不管之后有没有赋值，都会被推断成any类型而完全不被类型检查
  let myFavoriteNumber;
  myFavoriteNumber = 'sven';
  myFavoriteNumber = 7;

## 联合类型
  表示取值可以为多种类型中的一种
  let mylove: string | number;
  mylove = 'sven';
  mylove = 7;

## 对象的类型-接口
  在TypeScript中，我们使用接口（Interfaces）来定义对象的类型。
  interface Person {
    name: string,
    age: number
  }

  let tom: Person = {
    name: 'Tom',
    age: 25
  }

  赋值的时候，变量的形状必须和接口的形状保持一致

  // 可选属性
  interface Person {
    name: string,
    age? :number
  }
  let tom: Person {
    name: 'Tom'
  }

  let tom: Person {
    name: 'Tom',
    age: 20
  }

  // 任意属性
  interface Person {
    name: string,
    age? : number,
    [propName: string]: string | number
  }

  let tom: Person = {
    name: 'Tom',
    age: 25,
    gender: 'male'
  }

  // 只读属性
  有时候我们希望对象中的一些字段只能再创建的时候被赋值，那么可以用readonly定义只读属性
  interface Person {
    readonly id: number,
    name: string,
    age? : number,
    [propName: string]: any
  }
  let tom: Person = {
    id: 89757,
    name: 'Tom',
    gender: 'male'
  }
  tom.id = 9647; // 报错


## 数组的类型
  在TypeScript中，数组类型有多种定义方式，比较灵活
  let fibonacci: number[] = [1, 2, 3, 4, 5];
  
  // 数组泛型
  let fibonacci: Array<number> = [1, 2, 3, 4, 5];

  // 用接口表示数组
  interface NumberArray {
    [index: number]: number
  }
  let fibonacci: NumberArray = [1, 2, 3, 4, 5];

  // 类数组
  function sum() {
    let args: {
      [index: number]: number;
      length: number;
      callee: Function
    } = arguments;
  }

  // any在数组中的应用
  let list: any[] = ['xcatliu', 25, {website: 'http://xcatliu.com'}]
## 函数的类型
  // 函数声明
  function sum(x: number, y: number): number {
    return x + y
  }

  // 函数表达式
  let mySum: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
  }

  // 用接口定义函数的形状
  interface SearchFunc {
    (source: string, substring: string): boolean
  }
  let mySearch: searchFunc;
  mySearch = function(source: string, substring: string) {
    return source.seach(substring) !== -1
  }

  // 可选参数
  可选参后面不允许在出现必需参数了
  function buildName(firstName: string, lastName?: string) {
    if(lastName) {
      return firstName + lastName
    }
    return firstName
  }
  let tomcat = buildName('Tom', 'Cat');
  let tom = buildName('Tom');

  // 参数默认值
  function buildName(firstName: string, lastName: string = 'cat') {
    return firstName + lastName
  }
  let tomcat = buildName('Tom', 'Cat');
  let tom = buildName('Tom')

  // 剩余参数
  function push(array: any[], ...items: any[]) {
    items.forEach(function(item) {
      array.push(item);
    })
  }
  let a = [];
  push(a, 1, 2,3);
  
  // 重载
  function reverse(x: number): number;
  function reverse(x: string): string;

  function reverse(x: number | string) : number | string {
    if(typeof x === 'number') {
      return Number(x.toString().split('').reverse().join(''))
    }else if (typeof x === 'string') {
      return x.split('').reverse().join('');
    }
  }

  console.log(reverse(123));
  console.log(reverse('Hello'));
## 类型断言

## 声明文件
## 内置对象
