//실행 컨텍스트 Execution Context
//코드의 실행 순서와 스코프를 기억

//호이스팅(Hoisting)
//자바스크립트 엔진(번역기, Interpreter)이 코드를 실행하기 전,
//변수, 함수, 클래스의 선언문을 끌어 올리는 것을 말함.

//함수의 호이스팅은 함수의 선언문 전에 호출이 가능하게 해줌
//함수의 선언문은 선언 이전에도 호출이 가능함
print();
function print() {
  console.log("Hello");
}

//변수(let, const )와 클래스는 선언만 호이스팅이 되고,
//초기화는 안됨!!
//초기화 전, 변수에 접근하면 컴파일(빌드)에러가 발생
let hi = "hi";
console.log(hi);
let func1 = function () {};

//const cat = new Cat();
class Cat {}

let x = 1;
{
  //블럭 범위 내에서 x가 존재하는데 초기화는 되지 않았기 때문에 에러 발생!!
  //console.log(x);
  let x = 2;
}