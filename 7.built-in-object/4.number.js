const num1 = 123;
const num2 = new Number(123);
console.log(num1); //123 typeof number
console.log(num2);//[Number: 123] typeof object

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.NaN);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);

if(num1 === Number.NaN) {

}
if(Number.isNaN(Num1)){

}

//지수표기법(매우 크거나 작은 숫자를 표기할때 사용, 10의 n승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

//반올림하여 문자열로 변환
const num4 = 1234.234;
console.log(num4.toFixed());
console.log(num4.toString());
console.log(num4.toLocaleString('ar-EG')); //아라빅 단위

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2)); //전체 자릿수 표기가 안될때는 지수표기법

console.log(Number.EPSILON); //0과 1사이에서 나타낼 수 있는 가장 작은 숫자

if(Number.EPSILON >0 && Number.EPSILON<1){
  console.log(Number.EPSILON); 
}

const num = 0.1 + 0.3 - 0.2; //0.2
console.log(num); // 십진수를 이진수로 바꿔서 계산해서 다시 십진수로 반환하기 때문에 작은 오차가 발생!

function isEqual(original, expected) {
  return original === expected;
}
console.log(isEqual(1, 1)); //true
console.log(isEqual(0.1, 0.1)); //true
console.log(isEqual(num, 0.2)); //false