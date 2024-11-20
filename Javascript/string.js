let person = 'John';
console.log(typeof person); // string.   use the typeof operator to tell the variable type.

let x = 5;
console.log(typeof x); //number
x = 'Dog';
console.log(typeof x); // x now is with a type of string.



//?--- Quotes inside quotes 
//You can use quotes inside a string, as long as they don't match the quotes surrounding the string:
let answer1 = "It's alright";
let answer2 = "He is called 'Johnny'";
let answer3 = 'He is called "Johnny"';



// ?--- access of strings using square brackets.
// string[index]. where index is the position of a character in the string in number start from a count of 0.
console.log(answer1[0]); // I
console.log(answer2[4]); //s
//! if you try accessing an index that is not available in the string you will get result of undefined
console.log(answer2[40]); //undefined



//?--- concatenation. ( joining of strings together ).
let person1 = 'peter';
console.log(person + person1);// Johnpeter. note: you can join multiple strings together
let a = 200 + 'cat'; // a = 200cat, 200 will get converted to a string and concatenated

let b = '100';
let c = '200';
console.log(b + c);//100200

let d = 500;
console.log(d + c);//500200
console.log(c + d);//200500. Note: Js executes from left to right and it can produce different result.


//?--- Arithmetic of string
let num1 = '10';
let num2 = '5';
let num3 = '7';
let car = 'ferrari';

console.log(num1 * num2);//50
// ! all arithmetic operations works on string except ( + ) which concatenate the strings and if the string is not a number.

console.log(car / num3);// NaN (Not a Number).






//?=== Strings method
//they are functionalities provided by javascript. and they provide new values without altering the original string.

//? length (count of string starting from 1)
let student1 = 'micheal';
let student2 = 'uche';
let student3 = 'amaka';

console.log(student2);//4

let nameLengthOfStudent1 = student1.length;// nameLength stores the value returned from the string method. you use this variable to do extra stuffs
console.log(nameLengthOfStudent1);//7

let nameLengthOfStudent2 = student2.length;
let nameLengthOfStudent3 = student3.length;
let sumOflength = nameLengthOfStudent1 + nameLengthOfStudent2 + nameLengthOfStudent3;
console.log(sumOflength);//16



// ? charAt(i). i => index
//returns the character from the string at a position/ index (index count starts from 0).
console.log(student1.charAt(3));// h

//! if you try accessing an index that is not available in the string you will get backspace
console.log(student1.charAt(30));// backspace



//? slice(start, end);
// returns extracted index from the start index to the end index(end not included);
console.log(student1.slice(1, 5));//iche



//? replace(value, replacevalue)
let company = 'Google and Facebook';
let company2 = 'Apple';
let newCompany1 = company.replace("Google", "Netflix")
console.log(newCompany1);// Netflix and Facebook

let newCompany2 = company.replace('Facebook', company2);
console.log(newCompany2)// Netflix and Apple

`//todo
read more on string methods on w3Schools [https://www.w3schools.com/js/js_string_methods.asp]
or check their reference on string.

hold        ctrl + then click          => to open link
try to practice and test their examples either in your vscode or their playground.
`