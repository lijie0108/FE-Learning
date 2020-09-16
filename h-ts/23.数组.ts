
// let names: string[] = ['迪丽热巴', '古力娜扎', '马尔扎哈'];

// console.log(names);

// let names: string[] = new Array('迪丽热巴', '古力娜扎');
// console.log(names);

// let foods: string[] = ['馒头', '花卷', '米饭'];

// console.log(foods.length);
// console.log(foods[0]);
// console.log(foods[1]);

// foods[0] = '包子';
// foods[2] = '油条';
// console.log(foods);

// foods[3] = '油泼面';
// console.log(foods);

// foods[foods.length] = '麻花';
// console.log(foods);

// let nums: number[] = [100, 200, 300];

// for(let i: number = 0, len: number = nums.length; i < len; i++) {
//   console.log(nums[i]);
// }


let nums: number[] = [100, 200, 300];

let sum: number = 0;
for(let i: number = 0, len: number = nums.length; i < len; i++) {
  sum += nums[i];
}

console.log(sum)