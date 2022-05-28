//접근제어자 - 캡슐화
//private(#), public(기본), protected
class Fruit{
  //field(외부에서 받아와 constructor에 사용된다면 생략가능, 주로 인스턴스가 만들어질때 초기화가 되어야한다면 사용!)
  #name;
  #emoji;
  #type = '과일';
  constructor(name, emoji){
    this.#name = name;
    this.#emoji = emoji;
  }
  display(){
    console.log(`${this.#name}: ${this.#emoji}`);
  }
}

const apple = new Fruit('apple', '🍎');
// apple.#name = "orange"; //#field는 외부에서 접근이 불가능함
console.log(apple);