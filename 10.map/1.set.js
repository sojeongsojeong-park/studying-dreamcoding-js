//Set
const set = new Set([1, 2, 3]);
console.log(set);

//사이즈 확인
console.log(set.size);
//존재하는지 확인
console.log(set.has(2));
console.log(set.has(8));

//순회
set.forEach((item) => console.log(item));
for (const value of set.values()) {
  console.log(value);
}

//추가
set.add(5);
console.log(set);
//중복 ❌ 무시됨!
set.add(5);
console.log(set);

//삭제
set.delete(6);
console.log(set);

//전부 삭제
set.clear();
console.log(set);

//오브젝트 세트
const obj1 = { name: "🍉", price: 8 };
const obj2 = { name: "🍐", price: 4 };
const objs = new Set([obj1, obj2]);
console.log(objs);

//Quiz
obj1.price = 10;
objs.add(obj1);
console.log(objs);

//Quiz
const obj3 = { name: "🍐", price: 4 };
objs.add(obj3);
console.log(objs);
// Set(3) {
//   { name: '🍉', price: 10 },
//   { name: '🍐', price: 4 },
//   { name: '🍐', price: 4 }
// }
obj3.price = 8;
console.log(objs);
