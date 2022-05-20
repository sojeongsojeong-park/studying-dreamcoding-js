//증가 & 감소 연산자 Increment & Decrement Operators

let a = 0;
console.log(a); // 0
a++; //a = a + 1;
console.log(a) //1
a--; //a = a - 1;

// 주의!!
//a++ 필요한 연산을 하고, 그 뒤 값을 증가시킴 
//++a 값을 먼저 증가하고 필요한 연산을 함

a = 0;
let b = a++;
console.log(b); // 0 --> a를 먼저 할당하고 a를 증가시킴,, 할당 된 후에 a가 1이 된것!
let c = --b;
console.log(c) //-1 --> 먼저 감소를 한 후 할당!