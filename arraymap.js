const numbers = [4, 9, 16, 25,36,49,64,81,100];
const newArr = numbers.map(Math.sqrt)
console.log(newArr);

tripledNumbers = [4, 9, 16, 25,36,49,64,81,100];
var tripledNumbers = numbers.map(function(number) {
    return number * 3;
  });
console.log(tripledNumbers);

let arr = [2, 4, 6, 8, 10];
arr.forEach((num, index) => {
    return arr[index] = num * 2;
});
console.log(arr);

function myFunction(item) {
    sum += item;
  }

let sum = 0;
const numbers1 = [65, 44, 12, 4];
numbers1.forEach(myFunction);
console.log(sum);
console.log(numbers1);

var languages = ['HTML', 'CSS', 'JavaScript'];
languages.forEach(function(language) {
    console.log('I love ' + language + '!');
  });

// Functional Considerations
// It’s important to also understand that using map() may be preferable if you favor functional programming.

// This is because forEach() affects and changes our original Array.

// Key Takeaways
// Just about anything you can do with forEach() you can do with map(), and vise versa.
// map() allocates memory and stores return values. forEach() throws away return values and always returns undefined.
// forEach() will allow a callback function to mutate the current array. map() will instead return a new array.
