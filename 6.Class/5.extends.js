class Animal{
  constructor(color){
    this.color = color;
  }
  eat(){
    console.log('먹자!!');
  }
  sleep(){
    console.log('잔다!!');
  }
}

class Tiger extends Animal{}
const tiger = new Tiger('노랑이');
console.log(tiger);
tiger.sleep();
tiger.eat();


class Dog extends Animal{
  constructor(color, ownerName){
    super(color); //상속하고있는 부모 클래스를 가리킴
    this.ownerName = ownerName;
  }
  play(){
    console.log('놀자앙!!');
  }
  //오버라이딩 overriding
  eat(){
    super.eat(); // 부모의 함수도 호출하고, 내가 필요한 기능 추가적으로 구현 가능, 줄바꿔서 작성해도 무방!
    console.log('강아지가 먹는다! 왈');
  }
}
const poodle = new Dog('브라운', '소정');
console.log(poodle);
poodle.eat();
poodle.play();
poodle.sleep();