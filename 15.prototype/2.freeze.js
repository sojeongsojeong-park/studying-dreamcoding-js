//동결! Object.freeze 추가❌, 삭제❌, 쓰기❌, 속성 재정의
//(단, 얕은 꽁꽁 얼림!)
const ellie = { name: "엘리" };
const dog = { name: "와우", emoji: "🐶", owner: ellie };
Object.freeze(dog);

dog.name = "멍멍";
console.log(dog); //동결된 객체는 수정할 수 없음!!
dog.age = 4;
console.log(dog); //동결된 객체는 추가할 수 없음!!
delete dog.name;
console.log(dog); //동결된 객체는 삭제할 수 없음!!

ellie.name = "소정";
console.log(dog);

//밀봉! Object.seal 값의 수정✅, 추가❌, 삭제❌, 속성 재정의❌
const cat = { ...dog };
//Object.assign(cat, dog);
Object.seal(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.emoji;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(dog));
console.log(Object.isSealed(cat));

//확장 금지 preventExtensions 추가만 ❌
const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
