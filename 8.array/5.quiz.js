//퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
//단, 주어진 배열을 수정하지 않도록!
const quizOne = ["🍌", "🍓", "🍇", "🍓"];
function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

console.log(replace(quizOne, "🍓", "🥝"));

// quizOne.splice(1, 1, "🥝");
// quizOne.splice(3, 1, "🥝");
// console.log(quizOne);

//퀴즈2: 배열과 특정한 요소를 전달받아, 배열안에 그 요소가 몇개나 있는지 카운트하는 함수 만들기
//input:["🍌", "🍓", "🍇", "🍓"], "🍓"
const quizTwo = ["🍌", "🍓", "🍇", "🍓"];
function count(array, item) {
  let counter = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === item) {
      counter++;
    }
  }
  return counter;
}
console.log(count(quizTwo, "🍓"));
// const resultArr = quizTwo.filter((i) => i === "🍓");
// console.log(resultArr.length);

//퀴즈3: 배열1, 배열2 두 개의 배열을 전달받아 배열 1 아이템 중 배열 2에 존재하는 아이템만 담고 있는 배열 반환
//input:["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]

function match(array1, array2) {
  const result = [];
  for (let i = 0; i < array1.length; i++) {
    if (array2.includes(array1[i])) {
      result.push(array1[i]);
    }
  }
  return result;
}
console.log(match(["🍌", "🥝", "🍇"], ["🍌", "🍓", "🍇", "🍓"]));
