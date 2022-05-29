//정직원과 파트타임직원을 나타낼 수 있는 클래스를 만들어보자
//직원들의 정보: 이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다.
//정직원은 시간당 10000원
//파트타임 직원은 시간당 8000원

class Employee1{
  constructor(name, team, teamName, time, wage){
    this.name = name;
    this.team = team;
    this.teamName = teamName;
    this.time = time;
    this.wage = wage;
  }
  wageForAMonth(){
    console.log(`이번달 ${this.teamName}의 ${this.name}의 일한 시간은 ${this.time} 시간으로, 월급은 ${this.wage*this.time} 입니다. 고생하셨습니다!`);
  }
}

class PartTime extends Employee1{
  wage = 8000;
}
class FullTime extends Employee1{
  wage = 10000;
}
const parttime = new PartTime("sojeong", "sales", "sales1", 50)
parttime.wageForAMonth();
const fulltime = new FullTime("소정", "dev", "dev2", 78)
fulltime.wageForAMonth();


//엘리씸의 모범답안✨

class Employee{
  constructor(name, department, hoursPerMonth, payRate){
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }
  calculatePay(){
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends Employee{
  static #PAY_RATE = 10000;
  constructor(name, department, hoursPerMonth){
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_RATE)
  }
}
class PartTimeEmployee extends Employee{
  static #PAY_RATE = 8000
  constructor(name, department, hoursPerMonth){
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_RATE)
  }
}

const ellie = new FullTimeEmployee('엘리', 's/w', 30);
const bob = new PartTimeEmployee('밥', 's/w', 20);

console.log(ellie.calculatePay());
console.log(bob.calculatePay());