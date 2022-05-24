// 조건문 Conditional Statement
//if(조건){ } 조건에 맞을 때만 중괄호 안 코드 실행
//if(조건){ } else { }
//if(조건1){ } else if(조건2){ } else{ }

let fruit = 'orange';
if(fruit ==='apple'){
  console.log('🍎');
} else if(fruit ==="orange") {
  console.log('🍊');
} else {
  console.log("!!!");
}

if(0 || false || null || undefined){
  console.log("출력되면 안됨!!!");
}