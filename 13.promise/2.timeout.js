//자바스크립트 자체는 동기적으로 실행되지만 web api를 통해 비동기적으로 사용 가능!!
function execute() {
  console.log("1");
  setTimeout(() => {
    console.log("setTimeout");
  }, 3000);
  console.log("3");
}

execute();
