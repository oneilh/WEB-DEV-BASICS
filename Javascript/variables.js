// single line comment
/* this
    is
    a
    multiline comment
*/





`//? === variables
    they are containers for storing data

    //? syntax =>
        let variable1 = 20;  

        var, let, const  -> keyword
        variable1 -> name or identifier of your variable
        20 -> your value (can be any of the datatype)

        e.g:
        `;
    var isStrong = true;
    let num1 = 50;
    const person1 = "paul";
    console.log(num1); // console.log( value | variable ) used to display to the console.
    console.log(person1);
    console.log(isStrong);



    `
        //! variable names must be unique, those names are called identifiers
        //! those names or identifiers can be short names (x, y, z) or more descriptive names (age, density, incrementCount);

        //? The general rules for constructing names for variables (unique identifiers) are:
            Names can contain letters, digits, underscores, and dollar signs.
            Names must begin with a letter.
            Names can also begin with $ and _ (but we will not use it in this tutorial).
            Names are case sensitive (y and Y are different variables).
            Reserved words (like JavaScript keywords) cannot be used as names.
            
        //! Note: Js identifiers are case-sensitive
    `



    //? ways of writing js variables
    //1. Declaration and then assign
    let carName1; //this is declaration at this state the variable has no value(technically it is undefined);
    carName1 = 'Benz'; //we are giving it a value and do that we use the equal sign '='


    //2. assignment of value to the variable when you declare it:
    let carName2 = 'volkswagen';

    //3. declaration of many variables and then assign
    let x, y, z;
    x = 20;
    y =  50;
    z =  80;

    //4. assignment and declaration of many variables
    let num = 500, num2 = 300, person2 = 'peter';
    console.log(num);
    console.log(num2);
    console.log(person2);
    console.log(num, num2, person2); //using commas in console log between variable or value allows you to print different values or variable values on the same line
    //!you can console those variable above to see their values.





//? Reassignment of variables and variable swapping
    //reassignment 
    let animal = 'Dog';
    animal = 'Bird'
    console.log(animal); //animal is now Bird

    let age = 400;
    age = 500;


    let a = 500;
    a = 'peter' // a value change
    a = true
    


    //swapping
    let animal1 = 'Lion';
    let animal2 = 'Tiger';
    let animal3 = animal1; // animal3 is now assigned with the value of animal1.
    console.log(animal3); // value is Lion.

    let figure1 = 5000;
    let figure2 = 10000;
    figure1 = figure2; // figure1 is 10000.

    let figure3 = 2000;
    figure2 = figure3; // figure2 is 2000




`
- using var to declare variables is the old way of doing that while let and const are the modern way of doing so.

- use let when your values might change
- use const when your values won't change and as common practice they are declared with identifiers in all Uppercase.
