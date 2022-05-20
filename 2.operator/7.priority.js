let a = 2;
let b = 3;
let result = a + b * 4;
console.log(result); //14
//더하기 보다 곱하기가 더 큰 우선순위를 가짐!
result = a++ + b * 4;
console.log(result); //14
//여기서 a는 할당하고 계산된 후에 증가됨!

//우선순위를 조정하고 싶다면 () 활용!
result = (a + b) * 4;