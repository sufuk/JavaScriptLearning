// NaN represents numbers that
// can't express by js


var a = 0/0;

var b = "a string" * 1000;

var c = Math.sqrt(-9);

console.log("a: ", a);
console.log("b: ", b);
console.log("c: ", c);


var d = 99;
var e = "99";

console.log(d == e); // True
console.log(d === e); // False