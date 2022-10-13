//Lecture 10
const number = Math.trunc(Math.random()*100000);

const numberToString = number.toString();         //////////// it changes a number in to array of strings
console.log(numberToString);

const b = numberToString.split("",8);          //////////// it reverses the order of array strings
console.log(b);

const o = b.reverse(number);          //////////// it converts array of strings to array of number  
console.log(o);

 const n = o.map(function (x) { ///////////// it converts arrays of reversed string to reversed array of number
     return parseInt(x);
 });
 console.log(n);
 
 const fina = Number(n.join(""));//////////// joins reversed array of numbers to digits
 console.log(fina);
 