// Spread 연산자, 전개 구문
// 모든 Iterable 은 Spread 될 수 있다.
// 순회가 가능한 모든 것들은 촤르르륵 펼쳐질 수 있다.
// func(...iterable)
// [...iterable]
// {...obj}
// EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];
//add(nums[0], nums[1], nums[2]);
console.log(add([...nums]));

//Rest parameters
function sum(first, second, ...numbers) {
  console.log(numbers);
}

sum(1, 2, 3, 0, 1, 4, 3, 2);

//Array Concat
const fruits1 = ["🍓", "🍊"];
const fruits2 = ["🍎", "🍑"];
let arr = fruits1.concat(fruits2);
arr = [...fruits1, "🍒", ...fruits2];
console.log(arr);

//Object
const sojeong = { name: "sojeong", age: 25, home: { address: "home" } };
const updated = {
  ...sojeong,
  job: "FE Developer",
};
console.log(sojeong);
console.log(updated);
