// 논리 연산자 Logical Operator
// && 그리고
// || 또는
// 단축평가: short-circuit evaluation
const obj1 = { name: "🐶" };
const obj2 = { name: "🐱", owner: "sojeong" };

if (obj1 && obj2) {
  console.log("both true!");
}

//앞에 있는 것이 TRUE니까 뒤에 있는 것을 평가 하지 않고 그대로 할당
let result = obj1 && obj2;
console.log(result);

//젤 앞에 있는 것이 TRUE니까 바로 맨 앞에 것을 할당, 첫번째가 FALSE라면 가장 먼저 TRUE인 것이 할당
result = obj1 || obj2;
console.log(result);

// 활용예
// && 조건이 truthy 일때, 무언가를 해야할 경우
// || 조건이 falshy 일때, 무언가를 해야할 경우
function changeOwner(animal) {
  if (!animal.owner) {
    throw new Error("주인이 없어");
  }
  animal.owner = "바뀐주인";
}
function makeNewOwner(animal) {
  if (animal.owner) {
    throw new Error("주인이 있어");
  }
  animal.owner = "새로운주인";
}

obj1.owner && changeOwner(obj1);
obj2.owner && changeOwner(obj2);
console.log(obj1);
console.log(obj2);

obj1.owner || makeNewOwner(obj1);
obj2.owner || makeNewOwner(obj2);
console.log(obj1);
console.log(obj2);

//null 또는 undefined인 경우를 확인할때
let item = {price:1};
const price = item && item.price;
console.log(price);

//기본값을 설정
//default 는 parameter을 전달하지 않거나, UNDEFINED 설정
//null과 0 은 default parameter가 먹지 않음!!
function print(message){
  const text = message || 'Hello'
  console.log(text);
}
print();
