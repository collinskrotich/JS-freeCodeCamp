// Selecting from Many Options with Switch Statements
// If you have many options to choose from, use a switch statement. A switch statement tests a value and can have many case statements which define various possible values. Statements are executed from the first matched case value until a break is encountered.

// Here is an example of a switch statement:

switch (lowercaseLetter) {
  case "a":
    console.log("A");
    break;
  case "b":
    console.log("B");
    break;
}
// case values are tested with strict equality (===). The break tells JavaScript to stop executing statements. If the break is omitted, the next statement will be executed.

// Write a switch statement which tests val and sets answer for the following conditions:
// 1 - alpha
// 2 - beta
// 3 - gamma
// 4 - delta

function caseInSwitch(val) {
    let answer = "";
    // Only change code below this line
    switch(val){
      case 1:
      answer = "alpha";
      console.log(answer);
      break;
    
      case 2:
      answer = "beta";
      console.log(answer);
      break;
    
      case 3:
      answer = "gamma";
      console.log(answer);
      break;
    
      case 4:
      answer = "delta";
      console.log(answer);
      break;
    }
  
    // Only change code above this line
    return answer;
  }
  
  caseInSwitch(1);
  caseInSwitch(2);
  caseInSwitch(3);
  caseInSwitch(4);


// Adding a Default Option in Switch Statements
// In a switch statement you may not be able to specify all possible values as case statements. Instead, you can add the default statement which will be executed if no matching case statements are found. Think of it like the final else statement in an if/else chain.

// A default statement should be the last case.

function switchOfStuff(val) {
  let answer = "";
  // Only change code below this line
  switch(val){
    case "a":
    answer = "apple";
    break;

    case "b":
    answer = "bird";
    break;

    case "c":
    answer = "cat";
    break;

    default:
      answer = "stuff";
      break;

  }
  // Only change code above this line
  return answer;
}

switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);

// Multiple Identical Options in Switch Statements
// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered. If you have multiple inputs with the same output, you can represent them in a switch statement like this:

let result = "";
switch (val) {
  case 1:
  case 2:
  case 3:
    result = "1, 2, or 3";
    break;
  case 4:
    result = "4 alone";
}

// Returning Boolean Values from Functions
// You may recall from Comparison with the Equality Operator that all comparison operators return a boolean true or false value.

// Sometimes people use an if/else statement to do a comparison, like this:

function isEqual(a, b) {
  if (a === b) {
    return true;
  } else {
    return false;
  }
}
But there's a better way to do this. Since === returns true or false, we can return the result of the comparison:

function isEqual(a, b) {
  return a === b;
}

// Return Early Pattern for Functions
// When a return statement is reached, the execution of the current function stops and control returns to the calling location.

Example

function myFun() {
  console.log("Hello");
  return "World";
  console.log("byebye")
}
myFun();

// The above will display the string Hello in the console, and return the string World. The string byebye will never display in the console, because the function exits at the return statement.

