const fruits = ['π', 'π', 'π', 'π'];

//λ°°μ΄ μμ΄νμ μ°Έμ‘°νλ λ°©λ²
console.log(fruits[0]);//π
console.log(fruits[1]);//π
console.log(fruits[2]);//π
console.log(fruits[3]);//π
console.log(fruits.length); //4

for(let i = 0; i < fruits.length; i++){
  console.log(fruits[i]);
}


//const fruits = ['π', 'π', 'π', 'π'];
//μΆκ°, μ­μ  - μ’μ§ μμ λ°©μ π©
fruits[4] = 'π';
console.log(fruits); // μΆκ°λ λμ§λ§ μνμ§ μλ μμΉμ λ€μ΄κ° μ μμ΄μ π©

delete fruits[1]; 
console.log(fruits);// μ­μ λκΈ΄ νμ§λ§ <1 empty item>μ΄ λ¨μμλ€.
