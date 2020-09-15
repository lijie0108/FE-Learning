// 初识接口 interface
var screenResume = function (name, age, bust) {
    age < 24 && bust >= 90 && console.log(name + '进入面试');
    age >= 24 || bust < 90 && console.log(name + '你被淘汰');
};
var getResume = function (name, age, bust) {
    console.log(name + '年龄是' + age);
    console.log(name + '胸围是' + bust);
};
screenResume('dajiao', 25, 94);
getResume('大脚', 18, 94);
