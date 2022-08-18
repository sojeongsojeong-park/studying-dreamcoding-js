//클래스를 베이스로 한 객체지향 프로그래밍

class Animal {
  constructor(name, emoji) {
    this.name = name;
    this.emoji = emoji;
  }
  printName() {
    console.log(`${this.name} ${this.emoji}`);
  }
}

class Dog extends Animal {
  play() {
    console.log("같이 놀자용!");
  }
}

class Tiger extends Animal {
  hunt() {
    console.log("Hunt! ..🐇..");
  }
}

const dog1 = new Dog("멍멍", "🐶", "소정");
const tiger1 = new Tiger("어흥", "🐯");
dog1.printName();
tiger1.printName();
dog1.play();
tiger1.hunt();

console.log(dog1 instanceof Dog); //true
console.log(dog1 instanceof Animal); //true
console.log(dog1 instanceof Tiger); //false
console.log(tiger1 instanceof Tiger); //true
