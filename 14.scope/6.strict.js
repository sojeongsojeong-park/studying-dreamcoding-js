//엄격 모드 strict mode
//리액트와 같은 프레임워크 사용시 기본적으로 엄격 모드임

//파일 최상단에서도 가능하고, 블럭이나 함수 범위 안에서만 사용도 가능함
'use strict';

var x = 1;
//엄격 모드에서는 delete 호출 불가능
//delete x;

function add(x){
  var a = 2;
  //자동 선언 되지 않고, 에러 발생!
  b = a + x;
  console.log(this); //undefned
}
add(1);

const array = [1, 2, 3];
for(let num of arrya){
  //자동 선언 되지 않아 반드시 변수 선언 해주서야함!
  console.log(num);
}