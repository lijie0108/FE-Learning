// 初识接口 interface
interface Girl {
  name: string;
  age: number;
  bust: number;
  waistline?: number;
  [propname: string]: any;
  say(): string;
}

const girl = {
  name: '大脚',
  age: 18,
  bust: 94,
  waistline: 21,
  sex: '女',
  say() {
    return '欢迎光临'
  },
  teach() {
    return '我来教你'
  }
}

class Xiaojiejie implements Girl {
  name= 'xi';
  age = 18;
  bust = 90;
  say() {
    return '欢迎光临'
  }
}

interface Teacher extends Girl {
  teach(): string
}

const screenResume = (girl: Teacher) => {
  girl.age < 24 && girl.bust >= 90 && console.log(girl.name + '进入面试');
  girl.age >= 24 || girl.bust < 90 && console.log(name + '你被淘汰');
  girl.waistline && console.log(girl.name + '腰围是' + girl.waistline);
  girl.sex && console.log(girl.name + '性别是' + girl.sex)
}

// const screenResume = (name: string, age: number, bust: number) => {
//   age < 24 && bust >= 90 && console.log(name + '进入面试');
//   age >= 24 || bust < 90 && console.log(name + '你被淘汰');
// }

const getResume = (name: string, age: number, bust: number) => {
  console.log(name+ '年龄是' + age)
  console.log(name + '胸围是' + bust)
}

screenResume(girl);
getResume('大脚', 18, 94)

