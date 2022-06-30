//hof 고차함수
const fruits = ["🍌", "🍓", "🍇", "🍓"];

//배열을 빙글빙글 돌면서 원하는 것을 할 때
fruits.forEach(function (value) {
  console.log(value);
});
fruits.forEach((value) => console.log(value));

//조건에 맞는 (콜백함수) 아이템을 찾을 때
//find:제일 먼저 조건에 맞는 아이템을 반환
const item1 = { name: "milk", price: 2 };
const item2 = { name: "cookie", price: 3 };
const item3 = { name: "kimbab", price: 1 };
const products = [item1, item2, item3, item2];

let result = products.find((value) => value.name === "cookie");
console.log(result);

//fndIndex:제일 먼저 조건에 맞는 아이템의 인덱스를 반환
result = products.findIndex((value) => value.name === "cookie");
console.log(result);

//배열의 아이템들이 부분적으로 조건(콜백함수)에 맞는지 확인
result = products.some((item) => item.name === "cookie");
console.log(result);

//배열의 아이템들이 전부 조건(콜백함수)에 맞는지 확인
result = products.every((item) => item.name === "cookie");
console.log(result);

//조건에 맞는 모든 아이템들을 새로운 배열로!
result = products.filter((item) => item.name === "cookie");
console.log(result);

//Map 배열의 아이템들을 각각 다른 아이템으로 매핑할 수 있는, 변환해서 새로운 배열 생성!
const nums = [1, 2, 3, 4, 5];
result = nums.map((item) => item * 2);
console.log(result);

result = nums.map((item) => {
  if (item % 2 === 0) {
    return item * 2;
  } else {
    return item;
  }
});
console.log(result);

//Flatmap: 중첩된 배열을 쫘악 펴줌!

