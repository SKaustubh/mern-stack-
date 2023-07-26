const nums = [3, 5, 7, 3, 9, 10];

for (let i = 0; i < nums.length; i++) {
  console.log(nums[i] ** 2);
}

console.log("===================*************========================");
// for of loop

for (let num of nums) {
  console.log(num ** 2);
}
console.log("===================*************========================");
for (let i of nums.slice(0, 3)) {
  console.log(i);
}
