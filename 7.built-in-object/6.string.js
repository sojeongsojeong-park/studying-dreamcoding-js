const textObj = new String("Hello World!");
const text = "Hello World";
console.log(textObj);
console.log(text);
console.log(text.length);

console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(3));

console.log(text.indexOf("l")); // 가장 먼저 찾아진 위치 반환
console.log(text.lastIndexOf("l")); // 가장 마지막에 찾아진 위치 반환
console.log(text.lastIndexOf("H")); // 가장 마지막에 찾아진 위치 반환

console.log(text.startsWith("H")); // true
console.log(text.endsWith("!")); // true

console.log(text.toUpperCase()); //대문자로 변환된 새로운 문자열!
console.log(text.toLowerCase()); //소문자로 변환된 새로운 문자열!

console.log(text.substring(0, 2)); //2는 포함하지 않고, 2번째 인덱스 앞까지!!
console.log(text.slice(2)); //2번째 인덱스부터 잘라낸 문자열 반환
console.log(text.slice(-2)); //끝에서 2개의 문자열만 반환

const space = "            space           ";
console.log(space.trim()); //공백을 제거하고 문자열만 남겨둠

const longText = "Get to the point, yeah!";
console.log(longText.split(" ")); //스페이스 별로 끊어서 반환
console.log(longText.split(" ", 2)); //끊어진것 중에 앞에서 두덩어리만!
console.log(longText.split(","));
