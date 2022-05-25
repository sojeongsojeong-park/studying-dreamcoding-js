/**
 * 함수 선언문 function name(){ }
 * 함수 표현식 const name = function(){ }
 */

let add = function(a, b){
  return a + b;
}
console.log(add(1, 2));

//화살표 함수 const name = () => { }
const multiply = (a, b) => a * b;

console.log(multiply(3, 4));

//생성자 함수 const object = new Function();
//뒤 객체편에서 다룸
/*
 * 
 */

//IIFE(Immedicately-Invoked Function Expressions) 즉시 실행
(function run(){
  console.log("🥰")
})();