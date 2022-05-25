//주어진 숫자 만큼 0부터 순회하는 함수
//순회하면서 주어진 특정한 일을 수행해야 함
// ex) 5, 순회하는 숫자를 다 출력하고 싶음
// ex)5, 순회하는 숫자의 두배값을 다 출력하고 싶음
/**function iterate(max, action) */

const plus = (a) => console.log(a + 1);
const twice = (a) => console.log(2 * a);
function iteration(max, action){
  for(let i  = 1; i <= max; i++){
    action(i);
  }
}
iteration(5, twice);
iteration(10, plus);

setTimeout(() => {
  console.log("1초뒤 이 함수가 실행되었습니다.");
}, 1000);