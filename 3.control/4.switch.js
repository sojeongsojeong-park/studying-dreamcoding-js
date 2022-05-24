//조건문 Conditional Statement
//switch
//if else if else if else if ...else
//정해진 범위 안의 값에 대해 특정한 일을 해야 하는 경우
let day = 4; //0:월요일, 1:화요일...6:일요일
let dayName;
if(day === 0){
  dayName = 'Mon';
} else if(day === 1){
  dayName = 'Tue';
} else if(day === 2){
  dayName = 'Wed';
}else if(day === 3){
  dayName = 'Thu';
} else if(day === 4){
  dayName = 'Fri';
} else if(day === 5){
  dayName = 'Sat';
} else if(day === 6){
  dayName = 'Sun';
}

switch(day){
  case 0:
    dayName = "Mon";
    break;
  case 1:
    dayName = "Tue";
    break;
  case 2:
    dayName = "Wed";
    break;
  case 3:
    dayName = "Thu";
    break;
  case 4:
    dayName = "Fri";
    break;
  case 5:
    dayName = "Sat";
    break;
  case 6:
    dayName = "Sun";
    break;
  default:
    console.log("해당하는 요일이 없음");
}
console.log(dayName);

let condition = "okay" //okay, good -> 좋음!, bad -> 나쁨!

let text;
switch(condition){
  case 'okay':
  case 'good':
    text = '좋음!';
    break;
  case 'bad':
    text = '나쁨!';
    break;
}
console.log(text);