//while(조건) { }
//조건이 false 가 될때까지 {} 코드를 반복 실행

let num = 5;
while(num >= 0) {
  console.log(num);
  num--;
}
let isActive = false;
let i = 0;
while(isActive){
  console.log("아직 살아있다...!");
  if(i === 100){
    console.log("DEAD!")
    break;
  }
  i++;
}

do{
  console.log("do-while 일단 실행!")
} while(isActive);