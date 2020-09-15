// 数组类型注解的方法
// const numberArr = [1, 2, 3];

const numberArr: number[] = [1, 2, 3];

const strArr: string[] = ['1', '2', '3'];

const undefinedArr: undefined[] = [undefined, undefined];

const arr:(string | number)[] = [1, '2', undefined];


// type alias 类型别名
type Lady = {name: string, age: number};

const xioajiejies: Lady[] = [
  {name: '刘颖', age: 18},
  {name: '小大姐', age: 42}
];


class Madam {
  name: string;
  age: number;
}

const xioajiejie2: Madam[] = [
  {name: '刘颖', age: 18},
  {name: '小大姐', age: 42}
]
