`
//? types of operators in Js
1. Assignment operators ( = ). assigning values
2. Arithmetic operators. mathematics calculations
3. Comparison operators. compare values
4. Logical operators. Decision making
5. Typeof operators. Tells the datatype of the variable.





//?Arithmetic operators
operators                           Description
    +                                   addition
    -                                   Subtraction
    *                                   Multiplication
    **                                  Exponentiation
    /                                   Division
    %                                   Modulus(Reminder)
    ++                                  Increment
    --                                  Decrement
`

console.log(12 + 12); // 24
console.log(50 - 3 * 3); // can work with different operators at once

//? with variables
let a = 10;
let b = 110;
//we can get result directly from the console
console.log(a*b);

let c = a * b; // storing the result in a variable which can be logged to the console or used for another arithmetic operations.

let d = (1000 + 5)*a; // (1000 + 5) * 10



//! i will declare some variable here i will work those variables below
let x = 100;
let y = 6;
let z = 10;


//? Exponential
console.log(x**y);
console.log(x**y**z);



//? % (Modulus)
console.log(x % y); //4
console.log(x % z); //0
console.log(y % x);//6



//? Increment
console.log(++x); //101

let i = ++x; 
console.log(i);//result is 102 ( x was incremented by 1 on line 60 i.e it was 100 to 101 and now 102)

i = x++; 
console.log(i);// result is 102 (x is already assigned before incremented)


//? Decrement
console.log(--y); //5


`
//! Js operator precedence
Operator precedence describes the order in which operations are performed in an arithmetic expression.

the order are:
    brackets, exponential, division, multiplication, addition and subtraction
`

