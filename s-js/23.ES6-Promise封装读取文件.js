// 引入fs模块
const fs = require('fs');

// fs.readFile('./1.let变量声明以及声明特性.html', (err, data) => {
//   // 如果失败，则抛出错误
//   if(err) {
//     throw err;
//   }
//   console.log(data.toString());
// })

// 使用Promise封装

const p = new Promise((resolve, reject) => {
  fs.readFile('./11.let变量声明以及声明特性.html', (err, data) => {
    // 如果失败，则抛出错误
    if(err) {
      reject(err)
    }
    resolve(data);
  })
})

p.then(function(value){
  console.log(value.toString())
}, function(reason){
  console.log(reason)
})