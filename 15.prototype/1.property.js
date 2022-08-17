const dog = { name: "와우", emoji: "🐶" };

console.log(Object.keys(dog)); //['name', 'emoji']
console.log(Object.values(dog)); //['와우', '🐶']
console.log(Object.entries(dog)); //['name', '와우'], ['emoji', '🐶']

console.log("name" in dog); //dog라는 객체안에 name이라는 키가 있니?
console.log(dog.hasOwnProperty("name"));

//오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨
const descriptors = Object.getOwnPropertyDescriptors(dog);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(dog, "name");
console.log(desc);

Object.defineProperty(dog, "name", {
  value: "멍멍",
  writable: false,
  enumerable: false,
  configurable: false,
});
console.log(dog.name);
console.log(Object.keys(dog)); //name이 더이상 포함되지 않음!! because enumerable: false!

const student = {};
Object.defineProperties(student, {
  firstName: {
    value: "영희",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  lastName: {
    value: "김",
    writable: true,
    enumerable: true,
    configurable: true,
  },
  fullName: {
    get() {
      return `${lastName} ${firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split(" ");
    },
    configurable: true,
  },
});
console.log(student);
