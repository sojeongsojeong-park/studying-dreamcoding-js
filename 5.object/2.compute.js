const obj = {
  name: "소정",
  age: 25
}
//코딩하는 시점에, 정적으로 접근이 확정될때 사용 가능
obj.name;
obj.age;

//동적으로 속성에 접근하고 싶을때 대괄호 표기법 사용!
function getValue(obj, key){
  return obj[key];
}
console.log(getValue(obj, "name"));//대괄호 표기법 안에는 키 값이 문자열!! 잊지말쟈잉

function addKey(obj, key, value) {
  obj[key] = value;
}
addKey(obj, 'job', 'FE developer');
console.log(obj);

function deleteKey(obj, key) {
  delete obj[key];
}
deleteKey(obj, "age");
console.log(obj);