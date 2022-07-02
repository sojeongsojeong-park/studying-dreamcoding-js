//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
const quizOne = ["🍌", "🍓", "🍇", "🍓"];
function replace(array, from, to) {
  return array.map((i) => (i === from ? to : i));
}

console.log(replace(quizOne, "🍓", "🥝"));

//퀴즈2: 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
//input:["🍌", "🍓", "🍇", "🍓"], "🍓"
const quizTwo = ["🍌", "🍓", "🍇", "🍓"];
function count(array, item) {
  return array.filter((value) => value === item).length;
  // return array.reduce((count, value) => {
  //   if (value === item) {
  //     count++;
  //   }
  //   return count;
  // }, 0);
}
console.log(count(quizTwo, "🍓"));

//퀴즈3: 배열1, 배열2 두 개의 배열을 전달받아 배열 1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열 반환
//input:["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]
function match(array1, array2) {
  return array1.filter((item) => array2.includes(item));
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));

//quiz 4
//5이상(보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

const result = nums
  .filter((i) => i > 5)
  .reduce((prev, next, _, array) => (prev += next / array.length), 0);
console.log(result);
