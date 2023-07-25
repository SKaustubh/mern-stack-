console.log("hello world");
age = 27;
console.log(age);
console.log("================================================");
// wap to print all num divisiblle by
/// 7 & 11 in rangeof 50-100;

for (let i = 50; i <= 1000; i++) {
  if (i % 7 == 0 && i % 11 == 0) console.log(i);
}
console.log("================================================");
//program to check if a num is perfect sq

let n = 81;
sqrt = n ** 0.5;
if (sqrt == parseInt(sqrt)) {
  console.log("perfect sqrt");
} else {
  console.log("not perfect sqrt");
}

console.log("================================================");

// wap to reverse digits of a number

m = 265;
rev=0;
while (m > 0) {
  console.log(rev);
  let d = m % 10;
  rev = rev * 10 + d;
  m = parseInt(m / 10);
}
console.log(rev)
