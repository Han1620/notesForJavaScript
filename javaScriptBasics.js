/* 

//COMMENTS//   : 
                used to clarify functions of your code. Communicates intent.

DATA           :
                anything meaningful to the computer.

                javascript provides 8 different data types. 

                typeof operator:
                                use this operator to find the data type of a variable or value. i.e. typeof '3' will return 'string'

              QUEUE:
                     an abstract data structure where items are kept in order. new items can be added to teh back, old items can be taken from the front.

8 DATA TYPES:
              1) STRINGS/   :
          STRING LITERALS     
           
                            a collection of alphanumeric characters contained in single or double quotation marks.
                            to use " quote marks " inside of a string, use backslash (\) before the quote to ignore. in javascript single and double quotes work the same, but you can alternate use to avoid using a backslash (\). a backslash is an escape squence.

                            string values are immutable, meaning they cannot be altered once created, for example by bracket notation. however, you could reassign a different string to your variable to change it.

                            ESCAPE SEQUENCES CODE: 
                                                 to allow you to add characters to a string, that otherwise have a different meaning:
                                                        
                                                 single-quote    >>     \' 

                                                 double-quote    >>     \"

                                                 backslash       >>     \\

                                                 new-line        >>     \n

                                                 tab             >>     \t

                                                 carriage-return >>     \r

                                                 word-boundary   >>     \b

                                                 form-feed       >>     \f

                            .length :   
                                          inputing the length property after the string variable, will give you a value for the character count of the string (including spaces).


              2) NUMBERS    :
                                no need for quotation marks. can use decimal points, can't use commas.

                                FLOATING POINT: numbers that have a decimal point (may mess up results).

                                calculations possible for both numbers and floats (+-/*).

                                REMAINDER OPPERATOR % : gives the remainder of the division of two numbers 
                                                        (5 % 2 = 1) tells you if a number is odd (x % 2 = 1) 
                                                        or even (x % 2 = 0).
                                                        this is not the modulus operator, it does not work 
                                                        properly with negative numbers.
                                        

              3) BOOLEANS   : 
                                   only two values:
                                                  true || false

                                   *booleans are never written with "quotes", but simply as'return true' or 'return false'. 


              4) UNDEFINED  :
                                means empty.
                                
                                undefined means that you have chosen or forgotten to asign a value to something.

              5) NULL       :
                                null is what you use to purposefully apply an empty value.
              6) SYMBOL
                            [BRACKET NOTATION]:
                                                 JavaScript uses zero-based coding (the first value is categorised as 0, the second value is 1, and so on..)
                                                 
                                                 example: 
                                                        const firstName = "Charles";
                                                        const firstLetter = firstName[0];
                                                 
                                                 example 2 - find the last letter in a string:
                                                        const firstName = "Ada";
                                                        const lastLetter = firstName[firstName.length - 1]
                                                 
                                                 Bracket notation can also be used to access array data.
                            
                            [ARRAY DECLARATION]:
                                                 using square brackets you can create an array variable, to store several pieces of data in one place. each piece of data has an assigned index number. you access array data by refering to the index number

                                                 must have commas in between each entry.

                                                 [multi-dimensional array] : 
                                                                             when you nest one or more arrays within an array. the nested arrays need commas between them.
                                                                      
                                                 example 1- accessing multi-dimentional arrays:
                                                               const arr = [
                                                                 [1, 2, 3],
                                                                 [4, 5, 6],
                                                                 [7, 8, 9],
                                                                 [[10, 11, 12], 13, 14]
                                                               ];

                                                               const subarray = arr[3]; //returns 10, 11, 12, 13, 14
                                                               const nestedSubarray = arr[3][0]; //returns 10,11,12
                                                               const element = arr[3][0][1]; //returns 11 

                                                 arrays are mutable, meaning they can be changed freely, even if they array was declared as a const variable.

              7) OBJECT
                          DESCRIPTION:
                                      an object is made up of properties, with are key/value pairs.

                                      you access the metadata of an object through its 'properties'
                                      
                                      you can omit the quotes for single-word string properties. JavaScript will automatically typecast non-string properties as strings. 

                                      object property values can be any data type.

                                      most useful when you know that your input data is limited to a certain range
                                
                  CREATING AN OBJECT 
                USING LITERAL SYNTAX:
                                      const objName = {
                                        key : value,
                                        key : value,
                                        key : value
                                      };

        ACCESSING OBJECT PROPERTIES:
                                      DOT NOTATION:
                                                    is used when we know the name of the property we are trying to access. 
                                                    i.e- you could give the property value to a variable outside of the object, like so:

                                                    let newVar = objectName.propertyName;
                                                                      
                                                    here, newVar would have the same value as the propertyName value.
                                  BRACKET NOTATION:
                                                    is used for propety names that have spaces in them. like so: 

                                                    let newVar = objectName["property Name"];

                                                    you can also use bracket notation access object props with variables. like so:

                                                    let playerNumber = "propertyName";
                                                    let player = objectName[playerNumber];

                                                    this sets the value of the first variable to the name of a property. then creates a second variable to find the value of that property, by calling the property name through the first variable value.
                                                          
                           CREATING NEW PROPERTIES: 
                                                    you can create a new object property by using dot notation or bracket notation, like so:

                                                    objName.newPropName = "new value"
                                                    objName["newPropName"] = "new value"

                               DELETING PROPERTIES:
                                                    delete objectName.propName;
                                            
                  USING OBJECTS FOR LOOKUPS:
                                                    function objLookup(val) {       //the 'val' argument will be replaced by the property name
                                                      let result = "";

                                                      const objName = {
                                                        prop1:"Adams",
                                                        prop2:"Boston",
                                                        prop3:"Chicago",
                                                      }

                                                    result = lookup[val];           //bracket notation is used to locate the property value for the 'val' argument
                                                      return result;
                                                    }

                                                    objLookup("prop1");             //this argument in the function declaration will return the value "Adams"

                        FINDING OBJECT PROPERTIES:
                                                    .hasOwnProperty() method is used to find whether an object has a certain prop in it. returns true or false.

                                                    example:
                                                    function checkObj(obj, checkProp) {         //sets arguments for the function

                                                      if (obj.hasOwnProperty(checkProp)) {      //uses the same arguments for the .hasOwnProperty method
                                                        return obj[checkProp];                  //if true, returns value of obj prop using bracket notation
                                                      } else {
                                                        return "Not Found"
                                                      }
                                                    }
                                            
                        COMPLEX OBJECTS: 
                                          writing an object as a complex data structure would look like so:

                                          const varName = [
                                            {
                                              key: value,
                                              key: value,
                                            },
                                            {
                                              key: value,
                                              key: value,
                                            }
                                          ];
                                             
                                          the objects are held within an array, and are separated by commas.
                            
                         NESTED OBJECTS: 
                                          you can nest objects within other objects, like so: 

                                          const myStorage = {
                                            "car": {
                                              "inside": {
                                                "glove box": "maps",
                                                "passenger seat": "crumbs"
                                               },
                                              "outside": {
                                                "trunk": "jack"
                                              }
                                            }
                                          };

                                          const gloveBoxContents = myStorage.car.inside["glove box"];

                                          //this would assign the value of "maps" to the variable.
                                          //you should use dot notation where possible.

                ACCESSING NESTED ARRAYS:
                                          to access nested objects and nested arrays , you use array bracket notation:

                                          const ourPets = [
                                            {
                                              animalType: "cat",
                                              names: [
                                                "Meowzer",
                                                "Fluffy",
                                                "Kit-Cat"
                                              ]
                                            },
                                            {
                                              animalType: "dog",
                                              names: [
                                                "Spot",
                                                "Bowser",
                                                "Frankie"
                                              ]
                                            }
                                          ];

                                          ourPets[0].names[1]; //this returns "Fluffy"
                                          ourPets[1].names[0]; //this returns "Spot"

              ACCESSING AN OBJECT 
              THROUGH A FUNCTION:
                                    we have to use bracket notation to access the property, because we are not entering the name of the property inside the function(parameters). our function parameters are variables, that will be assigned arguments when declaring the function. 
                                           
                                    bracket notation can use variables to access properties. dot notation can only be used if you know the name of the property. using dot notation would just search for the string "prop" instead of using the variable's value.
              8) BIGINT

VARIABLES      :
                DEFINITION:
                            variables store and manipulate data in a dynamic way. this uses a 'label' to point to the data, rather than using the data itself.

                            Any of the 8 data types may be stored in a variable. 

                            Computer variables differ from mathematical variables in that they can store different values at different times.

                HOW TO ADD: 
                            declare a variable by putting 'var' in front of the name. once you have declared a variable, you dont need to add 'var', just refer to its name.

                            variables can be made up of numbers, letters, $ or _ , but may not contain spaces or start with a number.
                            
         ASSIGNING A VALUE:
                     (=)  : 
                            to store a value in a variable, use the assignment operator >> = << this is also called assigning a value.

                            you can assign the return value of a function, and add different arguments, to a new variable

              INITIALIZING: 
                            ways to initialise variables:

                            implicitly: if they are asigned a value during processing (i.e in a function).
                             
                            ||

                            explicitly: if they are asigned a value in the declaration statement.

                 camelCase: 
                            this text-type is for uniform casing, and ease of reading. 

   TYPES VARIABLE KEYWORDS:
                              var:   
                                   can be overwritten accidentally, as no error shows up if the same variable name is declared twice.

                              let:   
                                   error shows if a let variable name is declared more than once. 

                                   value of this variable can be changed.

                                   this contains a mutable value, use >> camelCase << for the variable name.
                            
                            const: 
                                   similarly, cannot be delared more than once. 
                                   values of const variables are constant, and cannot be reassigned.
                                   this contains a immutable value, use >> UPPER_CASE << for the variable name.

INCREMENTS:
                PLUS ONE: 
                            i++  >>is the same as>>   i = i + 1 (eliminating need for the equals sign)
                                      
                            myVar++  >>is the same as>>  myVar = myVar + 1 

               MINUS ONE:
                            i--  >>is the same as>>  i = i - 1 

               PLUS MORE 
                THAN ONE:   i += 5  >>is the same as>>  i = i + 5 

                            myVar +=7  >>is the same as>>  myVar = myVar + 7

                   MINUS:   i -= 5  >>is the same as>>  i = i - 5
                  DIVIDE:   i /= 5  >>is the same as>>  i = i / 5
                MULTIPLY:   i *= 5  >>is the same as>>  i = i * 5


CONCATENATION OPERATOR:  (+) operator used with a string value.
                         You can build a new string out of other strings by concatenating them together.
                         
                         example 1- concatenating a string to a string using (+) operators:

                                   "This is the start." + " This is the end."
                         
                         example 1- concatenating strings together using the (+=) operaters etc:

                                   let myStr = "This is the first sentence";
                                    myStr += "This is the second sentence.";

                         example 2- concatenating a variable to a string: 

                                   const ourName = "freeCodeCamp";
                                   const ourStr = "Hello, our name is " + ourName + ", how are you?";

                         example 3- appending variables to strings:

                                   const anAdjective = "awesome!";
                                   let ourStr = "freeCodeCamp is ";
                                   ourStr += anAdjective;

                      
METHODS (FUNCTIONS):           
                     .PUSH() : 
                                   this takes one or more parameters and "pushes" them onto the end of an array.
                                   you write this as: nameOfArray.push(["item or array to add to the end"]).

                     .UNSHIFT(): 
                                   this works in the same way as .push(), however, it adds the element to the begginging of the array. Like : nameOfArray.unshift(["array i want to add"])

                     .POP()  :
                                   this removes the last element from an array and stores it in a variable.
                                   you write this as: 

                                   const threeArr = [1, 4, 6];
                                   const oneDown = threeArr.pop();
                                   console.log(oneDown);
                                   console.log(threeArr);

                                   The first console.log will display the value 6, and the second will display the value [1, 4].

                     .SHIFT() :
                                   this works in the same way as .pop(), however, it removes the first item from an array, an assigns it to a variable. 


FUNCTIONS:
            Definition :
                            reusable parts of code

            How to Use :
                            define a function by: function nameOfFunction(){code to be executed}.
                            
                            call or 'invoke' by the function name followed by ().

           Parameters: 
                            variables that are placed the in the parentheses when you invoke a function. you can have multiple parameters, separated with commas. the values that are passed into the function parenthese are called arguments.
              
                            example:
                            
                            //this adds the sum of the first parameter and the second, to get 3//
                            function functionWithArgs(one, two){
                            console.log(one + two);
                            }
                            
                            //this adds the sum of 7 and 9, using the previously created function//functionWithArgs(7, 9)

STATEMENTS
                            DEFINITION: 
                                          ***

                            return  =  return statements can be used to send a value back out of a function

                            example: 
                            function timesFive(argument){
                              return argument * 5;
                            }

                            const answer = timesFive(8)
                            //answer variable has a value of 40//

SCOPE:
              GLOBAL:
                            variables that are defined outside of the function block have a 'global' scope. this means they can be seen (and used) everywhere in your JavaScript code.

                            always declare variables in the global scope with 'let' or 'const' keywords to avoid errors.

              LOCAL:
                            variables that are declared within a function, or the function parameters. this means they are only visible (or used) within that function. they cannot be invoked outside of the function.

                            *local variables take precendence over the global variables. meaning if they share the same name, the global variable will be ignored. 

UNDEFINED VALUE:
                            if a function does not have a return statement, then the returned value of the invoked function will be 'undefined'.


CONDITIONAL LOGIC:

IF STEATEMENTS:
                            used to make decisions in code.

                            it tells JavaScript to execute the code in the curly braces under certain conditions, i.e.:

                                   if (condition is true) {
                                     statement is executed
                                   }

ELSE STATEMENTS:  
                            when an 'if' statement returns false, you can use an 'else' statement to execute an alternate block of code. 

//check revision below//
                            BOOLEAN CONDITIONS: if(condition may only be true or false){statement}

                                                 when the condition evaluates to true, the program executes the statement inside the curly baces.
                                                 
                                                 when boolean condition evaluates to false, the program will not execute the statment.

                                                 **example:

                                                 function test(myCondition) {
                                                   if(myCondition) {
                                                     return "It was true";
                                                   }
                                                   return "It was false";
                                                 }

                                                 test(true);  //function returns a string of "it was true"
                                                 test(false);  //function returns a string of "it was false"

                                                 in boolean conditional logic, by repeating the condition of the 'function' parenthese in the 'if' paranthese, when you invoke the function, you enter either a true or false parameter value which leads to different sets of code returns.

//check revision above//

COMPARISON OPERATORS:     
                        all comparison operators return boolean "true" or "false"

                        EQUALITY OPERATOR (==):
                                                 compares two values to see if theyre equivalent.
                                                 i.e. 1 == 1   //true
                                                      1 == '1' //true

                                                      javascript can use 'type coercion' to convert one data type to another, to compare the two.

                STRICT EQUALITY OPERATOR (===):
                                                  works similar to the equality operator, however it does not do a type conversion, so both data types must be the same.

                      INEQUALITY OPERATOR (!=):
                                                  the opposite of the equality operator. evaluates whether values are not equal. will use type coercion 

              STRICT INEQUALITY OPERATOR (!==):  
                                                  logical opposite of strict equality operator. no type coercion used. 

                     GREATER THAN OPERATOR (>)
                        LESS THAN OPERATOR (<)
        GREATER THAN OR EQUAL TO OPERATOR (>=)
           LESS THAN OR EQUAL TO OPERATOR (<=): 
                                                  these also use type coercion

                             AND OPERATOR (&&):
                                                  evaluates whether the operands to the left and right are true.
                                                  
                              OR OPERATOR (||):
                                                  if either operands are true. 
                                                  composed of two pipe symbols.

SUBSTITUTING IF/ELSE STATEMENTS
WITH COMPARISON OPERATORS:        if you require a 'true' or 'false' value...
                                  EXAMPLE:
                                  //with if/else
                                  function isEqual(a, b) {
                                    if (a === b) {
                                      return true;
                                    } else {
                                      return false;
                                    }
                                  }

                                  //with comparison operator
                                  function isEqual(a, b) {
                                    return a === b;
                                  }
                                  //this works because an untrue comparison operator returns 'false'

SWITCH STATEMENTS: 
                  holds multiple 'case' statements in a switch block. it evaluates its expression, then executes all statements that follow the matching 'case' label. if there is a match, the associated block of code is executed.

                  case values are tested with strict equality.
                  
                  we 'break' out of the switch statement when the case is completed. the break is optional, but can save a lot of execution time because it "ignores" the execution of all the rest of the code in the switch block.

                  the default keyword specifies some code to run if there is no case match.

                  i.e.
                  switch(expression) {
                    case x:
                      // code block
                      break;
                    case y:
                      // code block
                      break;
                    default:
                      // code block
                  }

                  example 1- with added variable for the 'answer':

                  function functionName(val) {
                    let answer = "";
                   switch (val) {
                      case 1:
                        answer = "alpha";
                        break;
                      case 2:
                        answer = "beta";
                        break;
                      case 3:
                        answer = "gamma";
                        break;
                      case 4:
                        answer = "delta";
                        break;
                   }
                    return answer;
                  }

                  example 2- multiple inputs with the same output:

                  function sequentialSizes(val) {
                    let answer = "";

                  switch(val) {
                    case 1:
                    case 2:
                    case 3:
                      answer = "Low";
                      break;
                    case 4:
                    case 5:
                    case 6:
                      answer = "Mid";
                      break;
                    case 7:
                    case 8:
                    case 9:
                      answer = "High";
                      break;
                  }

                    return answer;
                  }

RETURN: 
        use of the return statement will exit the function, and not read the rest of the code.

LOOPS:
          DESCRIPTION: 
                        used to run the same code multiple times.


WHILE LOOP: 
                        runs while a specified condition is true and stops once that condition is no longer true.

                        example:
                        const myArray = [];

                        let i = 5;

                        while (i >= 0) {
                          myArray.push(i);
                          i--;
                        };

                        myArray will equal [5, 4, 3, 2, 1, 0]
                      
FOR LOOP: 
                        runs a specific amount of times

                        STRUCTURE:
                                    for loops are declared (created) with three optional expressions:

                                    for (initialization statement; condition statement; final expression) {} 

         INITIALIZATION STATEMENT: 
                                    runs only once before the loop starts. 

                                    typically used to define and setup loop variable. 

            CONDITIONAL STATEMENT: 
                                    evaluated at the beginning of every loop iteration.

                                    the loop will continue so long as the conditional statement evaluates as true.

                                    if the conditional statment is false at the start of the iteration, the loop will stop executing.

                 FINAL EXPRESSION: 
                                    executed at the end of each loop iteration. 
                                                              
                                    also known as the INCREMENTATION, as it is usually used to increment or decrement a value (your loop counter), but it can be used for any purpose.

                                    examples of possible assignment operators: 

                                    i++       =       i + 1       (increments of 1)
                                    i--       =       i - 1       (decrements of 1)
                                    i+=2      =       i + 2       (increments of 2)
                                    i-=5      =       i - 5       (decrements of 5)
                                    i*=7      =       i * 7       (increments of multiples of 7)
                                    i/=3      =       i / 3       (decrements of divisions of 3)
                                    i+=f()    =       i + f()     (increments of f()) 

                                    for more examples/explanations of different assignment operators: 
                                    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#assignment_operators

                          EXAMPLE
                          -of iterating numbers with a for loop: 
                                    const myArray = [];

                                    for (let i=9 ; i<=1 ; i-=2) {
                                      myArray.push(i);
                                    }
                                    //this gives myArray the value of [9, 7, 5, 3, 1]

            ARRAYS WITH FOR LOOPS:
                                    .length: 
                                            is written as variable.length, and is equal to the length of that variable. for a string, it would b eequal to the amount of characters. for an array, it would be equal to the amount of items in that array. 

                                    EXAMPLE:
                                            const arr = [10, 9, 8, 7, 6];

                                            for (let i = 0; i < arr.length; i++) {
                                               console.log(arr[i]);
                                            }
                                            //this will output each element of the array 'arr' to the console.

                                    EXAMPLE:
                                            const myArr = [2, 3, 4, 5, 6];

                                            let total = 0

                                            for(let i=0; i<myArr.length; i++){
                                              total += myArr[i];
                                            }
                                            //this adds the sum of each element of the array 'myArr' to the 'total' variable. 'total' will have the value of 20.
                  
                NESTING FOR LOOPS:
                                    const arr = [
                                      [1, 2], [3, 4], [5, 6]
                                    ];

                                    for (let i = 0; i < arr.length; i++) {
                                      for (let j = 0; j < arr[i].length; j++) {
                                        console.log(arr[i][j]);
                                      }
                                    }
                                    //this console logs as 1 2 3 4 5 6

DO...WHILE LOOP:
                  it will 'do' one pass of the code, no matter what, then it will continue to run the loop 'while' the condition evaluates as true.
                  
                  STRUCTURE: 
                              do {
                                code;
                              } while (condition);

RECURSION:
            the concept that a function can be expressed in terms of itself.

            you can replace a loop with recursion.
                                                                          
*/
