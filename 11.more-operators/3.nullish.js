// Nullish Coalescing Operator
// ES11 (ECMAScript 2020)
// ??
// ?? null, undefined
// || falshy한 경우 설정(할당)
let num = 0;
console.log(num || '-1'); //-1 because 0 is false
console.log(num ?? '-1'); //0