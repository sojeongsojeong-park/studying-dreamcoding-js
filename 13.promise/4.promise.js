//주어진 seconds(초)가 지나면 callback함수를 호출함
//단, seconds가 0보다 작으면 에러를 던지자!

function runInDelay(seconds) {
  return new Promise((resolve, reject) => {
    if (!seconds || seconds < 0) {
      reject(new Error("seconds가 0보다 작음"));
    }
    setTimeout(() => resolve(), seconds * 1000);
  });
}

// runInDelay(2)
// .then('필요한 일을 수행')
// .catch('에러를 처리')
// .finally('성공하던 실패하던 최종적으로 무조건 호출 되어야 하는 일!!')
runInDelay(2)
  .then(() => {
    console.log("타이머 완료!");
  })
  .catch(console.error)
  .finally(() => console.log("finish!"));

try {
  runInDelay(() => console.log("timer success"), 3);
} catch (error) {}
