function add(a, b){
  console.log(a);
  console.log(b)
  return a + b;
}

const sum = add;

console.log(sum(1, 2));// 1/ 2/ 3
console.log(add(1, 2));// 1/ 2/ 3