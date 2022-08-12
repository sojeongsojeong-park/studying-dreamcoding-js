//Bubbling up, Propagating 🧼
function a() {
  throw new Error("error!");
}
function b() {
  try {
    a();
  } catch (error) {
    // console.log(error);
    // console.log("가장 근접한 B에서 잡은 에러!");
    console.log("생각해보니까 이 에러는 내가 핸들링 할 수 없을 것 같군!");
    throw error;
  }
}
function c() {
  b();
}

try {
  c();
} catch (error) {
  console.log("Catched!");
}
console.log("done!");
