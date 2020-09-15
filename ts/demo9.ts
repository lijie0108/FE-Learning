// 类的概念和使用
class Lady {
  content = "Hi, 帅哥";
  sayHello() {
    return this.content;
  }
}

class XiaoJieJie extends Lady {
  sayLove() {
    return 'I love you';
  }
  sayHello() {
    // return 'Hi, honey';
    return super.sayHello() + '.你好'
  }
}



const goddess = new XiaoJieJie();
console.log(goddess.sayHello());
console.log(goddess.sayLove());