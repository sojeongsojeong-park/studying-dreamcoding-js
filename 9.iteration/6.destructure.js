//구조 분해 할당 Destructuring Assignment
//데이터 뭉치(그룹화)를 쉽게 만들 수 있다.
const fruits = ["🍓", "🍊", "🍎", "🍑"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
//배열에 값이 있다면 배열의 값이 우선순위를 가짐
console.log(z);

function createEmoji() {
  return ["apple", "🍎"];
}
const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const sojeong = { name: "sojeong", age: 25, job: "s/w engineer" };
function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(sojeong);

const { name: sojeongPark, age, job = occupation } = sojeong;
//키의 이름을 변경하고 싶을 때!
console.log(sojeongPark);
console.log(age);
console.log(job);

//Quiz
const prop = {
  name: "Button",
  styles: {
    size: 20,
    color: "black",
  },
};

function changeColor({ styles: { color } }) {
  console.log(color);
}
changeColor(prop);
