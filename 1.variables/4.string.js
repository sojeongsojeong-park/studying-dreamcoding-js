//문자열 타입
let string = "안녕하세요!";
string = `Hello!`
console.log(string);

//특수 문자 출력하는 법
string = '"hellow"'
console.log(string);

string = '안녕 \n 엘리야! \t\t 내 이름은 \\\u09ac';

//템플릿 리터럴(Template Literal)
let id = "sojeong";
let greeting = "hello!, " + id + " have a nice day";
console.log(greeting);

greeting = `안녕!, ${id} 
Have a nice day!`;
console.log(greeting)