const fruits = ['🍎', '🍊', '🍌', '🍐'];

//배열 아이템을 참조하는 방법
console.log(fruits[0]);//🍎
console.log(fruits[1]);//🍊
console.log(fruits[2]);//🍌
console.log(fruits[3]);//🍐
console.log(fruits.length); //4

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}


//const fruits = ['🍎', '🍊', '🍌', '🍐'];
//추가, 삭제 - 좋지 않은 방식 💩
fruits[4] = '🍓';
console.log(fruits); // 추가는 되지만 원하지 않는 위치에 들어갈 수 있어서 💩

delete fruits[1]; 
console.log(fruits);// 삭제되긴 하지만 <1 empty item>이 남아있다.
