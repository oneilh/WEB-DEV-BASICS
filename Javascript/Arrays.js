//?=== Arrays
//they are special variables that store more than one value

//? creating an array
let names = ['alimah', 'stanley', 'hillary', 'lanre', 'precious']; 
console.log(names);

//or you can create an array like this:
let oddNumbers = [];
oddNumbers[0] = 1; //adding 1 to the first index 
oddNumbers[1] = 3;
oddNumbers[2] = 5;
oddNumbers[3] = 7; 
console.log(oddNumbers);// [1, 3, 5, 7]



//? accessing an array;
console.log(oddNumbers[0]);// 1
console.log(names[3]);// lanre

//! if you try accessing an invalid index value you will have undefined 
console.log(names[10]);


//? in Javascript an array can consist of different datatypes
const differentValues = [true, false, 'peter', undefined, null, 'John', 19, 20];
console.log(differentValues);



//? adding or updating an array after it has been created.
names[4] = 'uche';
console.log(names)// uche get added to the array because the index is not yet existing.

names[2]= 'micheal'// micheal will replace hillary because the index is already existing in the array.






//? === Array method

//? Array.length
console.log(names.length); //5



//? push() and pop()
//push add to the end array, pop removes from the end of the array.
names.push('peter');
console.log(names);//adds peter

oddNumbers.pop();
console.log(oddNumbers); //removes 7


//! Read more on -> https://www.w3schools.com/js/js_array_methods.asp