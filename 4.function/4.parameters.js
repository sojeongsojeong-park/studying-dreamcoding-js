//매개변수의 기본값은 무조건 undefined
//매개변수의 정보는 함수 내부에서 접근이 가능한 arguments 객체에 저장됨
//매개변수 기본값 Defaul Parameters : a = 1, b = 1
function add(a=1, b=2){
  console.log(a);
  console.log(b);
  console.log(arguments);
  console.log(arguments[1]);
  return a + b;
}
add(); // 1, 2, [Arguments] {}, undefined
add(2,3); // 2, 3, [Arguments] { '0':2, '1':3 }, 3


//Rest 매개변수 Rest Parameters
function sum(a, b, ...numbers){
  console.log(a);
  console.log(b);
  console.log(numbers);
}
sum(1, 2, 3, 4, 5, 6, 76, 7, 87, 8, 9);
