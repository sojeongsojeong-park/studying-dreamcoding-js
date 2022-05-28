//접근자 프로퍼티(Accessor Property)

class Student{
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }
  //접근할때 호출
  get fullName(){
    return `${this.lastName} ${this.firstName}`;
  }
  //할당할때 호출
  set fullName(value){
    console.log("set: " + value);
  }

}

const student = new Student('소정', '박');
student.firstName = 'ellie';
console.log(student.fullName); //get 호출
student.fullName = 'sojeong park'; //set에 전달
