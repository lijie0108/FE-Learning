// type.annotation 类型注解
// type inference 类型推断

/**
 * 工作使用问题（潜规则）
 * 如果TS能够自动分析变量类型，我们就什么也不需要做了
 * 如果TS无法分析变量类型的话，我们就需要使用类型注解
 */
let count2: number;
count2 = 123;

let countInference = 123;

const one = 1;
const two = 2;
const three = one + two;

function getTotal(one:number, two:number) {
  return one + two;
}

const total = getTotal(1, 2);

const Xiaojiejies = {
  name: '刘颖',
  age: 18
}

