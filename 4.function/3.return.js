//return을 명시적으로 하지 않으면 자동으로 undefined이 반환됨!

function add(a, b){
  //a+b; => undefined
  return a + b;
}

const result = add(1, 2);
console.log(result);

function print(text){
  console.log(text);
}
// 만약 const result = print("값");으로 result를 콘솔에 찍는다면 
// undefined가 찍힘!
// return이 없기 때문!!
print("sojeong");


/**
 * return을 함수 중간에 하게 되면 함수가 종료됨
 * 사용예: 조건이 맞지 않는 경우 함수 도입부분에서 함수를 일찍이 종료함!
 */
function printing(num){
  if(num<0){
    return;
  }
  console.log(num);
}
printing(12)
printing(-12);
