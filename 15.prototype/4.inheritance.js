//프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name, emoji) {
  this.name = name;
  this.emoji = emoji;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.emoji}`);
};

function Dog(name, emoji, owner) {
  //super(name, emoji)
  Animal.call(this, name, emoji);
  this.owner = owner;
}
//Dog.prototype = Object.create(Object.prototype); <- 이것이 기본!!
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = () => {
  console.log("같이 놀자용!");
};
function Tiger(name, emoji) {
  Animal.call(this, name, emoji);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("Hunt! ..🐇..");
};
const dog1 = new Dog("멍멍", "🐶", "소정");
const tiger1 = new Tiger("어흥", "🐯");
tiger1.printName();
tiger1.hunt();

console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false
