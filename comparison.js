// There are many comparison operators in JavaScript. All of these operators return a boolean true or false value.

// The most basic operator is the equality operator ==. The equality operator compares two values and returns true if they're equivalent or false if they are not. Note that equality is different from assignment (=), which assigns the value on the right of the operator to a variable on the left.

function equalityTest(myVal) {
  if (myVal == 10) {
    return "Equal";
  }
  return "Not Equal";
}

// If myVal is equal to 10, the equality operator returns true, so the code in the curly braces will execute, 
// and the function will return Equal. Otherwise, the function will return Not Equal. 
// In order for JavaScript to compare two different data types (for example, numbers and strings), 
// it must convert one type to another. 
// This is known as Type Coercion. Once it does, however, it can compare terms as follows:

1   ==  1  // true
1   ==  2  // false
1   == '1' // true
"3" ==  3  // true

// Comparison with the Strict Equality Operator
// Strict equality (===) is the counterpart to the equality operator (==). However, unlike the equality operator, which attempts to convert both values being compared to a common type, the strict equality operator does not perform a type conversion.

// If the values being compared have different types, they are considered unequal, and the strict equality operator will return false.

// Examples

3 ===  3  // true
3 === '3' // false
// In the second example, 3 is a Number type and '3' is a String type.



// Comparison with the Inequality Operator
// The inequality operator (!=) is the opposite of the equality operator. It means not equal and returns false where equality would return true and vice versa. Like the equality operator, the inequality operator will convert data types of values while comparing.

// Examples

1 !=  2    // true
1 != "1"   // false
1 != '1'   // false
1 != true  // false
0 != false // false


// Comparison with the Greater Than Operator
// The greater than operator (>) compares the values of two numbers. If the number to the left is greater than the number to the right, it returns true. Otherwise, it returns false.

// Like the equality operator, the greater than operator will convert data types of values while comparing.

// Examples

5   >  3  // true
7   > '3' // true
2   >  3  // false
'1' >  9  // false