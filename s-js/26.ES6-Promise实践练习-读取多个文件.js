const fs = require('fs');

// fs.readFile('./1.txt', (err, data1) => {
//   fs.readFile('./2.txt', (err, data2) => {
//     fs.readFile('./3.txt', (err, data3) => {

//       let result = data1 + " " + data2 + " " + data3;
//       console.log(result)
//     })
//   })
// })

// 使用Promise实现
const p = new Promise((resolve, reject) => {
  fs.readFile('./1.txt', (err, data) => {
    resolve(data);
  })
})

p.then(value=> {
  return new Promise((resolve, reject) => {
    fs.readFile('./2.txt', (err, data) => {
      resolve([value, data]);
    })
  })
}).then(value=> {
  return new Promise((resolve, reject) => {
    fs.readFile('./3.txt', (err, data) => {
      value.push(data)
      resolve(value);
    })
  })
}).then(value => {
  console.log(value.join('\r\n'));
})