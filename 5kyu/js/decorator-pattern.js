// Description:
// The Decorator Pattern is a design pattern that allows behaviour to be added to an existing object/function dynamically without affecting its implementation.
// This pattern is designed so that multiple decorators can be stacked on top of each other, each time adding a new functionality to the overridden function(s).

// The decorator pattern is an alternative to subclassing. Subclassing adds behavior at compile time, and the change affects all instances of the original class; decorating can provide new behavior at run-time for individual objects/functions.

// http://upload.wikimedia.org/wikipedia/commons/e/e9/Decorator_UML_class_diagram.svg

// Motivation:
// We will explain the utility of the decorator pattern with a simple example.

// Suppose we have the sum() function:

// //returns the sum of the arguments
// function sum() {
//   return Array.prototype.reduce.call(arguments, function(sum, value) {
//     return sum + value;
//   }, 0);
// }

// sum(1, 4, 8, 9) //22
// Now suppose we want to sum only the numbers are between 1 and 9. An intrusive and non-reusable solution could be:

// //returns the sum of the arguments between 1 and 9
// function sum() {
//   return Array.prototype.reduce.call(arguments, function(sum, value) {
//     if (value >= 1 && value <= 9) {
//       return sum + value;
//     } else {
//       return sum;
//     }
//   }, 0);
// }

// sum(1, 9, -3, 1, 0, 4, 8, 9, 12); // 22
// Although this solution is correct, it is not reusable because it is difficult to modify the minimum and maximum limits or add new functionality.

// A better solution would be to define the filter(min, max) function:

// //returns an array containing the numbers that are between min and max
// //the numbers are passed from third position
// function filter(min, max) {
//   return Array.prototype.slice.call(arguments, 2).filter(function(value) {
//     return value >= min && value <= max;
//   });
// }

// filter(1, 9, -3, 1, 0, 4, 8, 9, 12); // [1, 4, 8, 9]
// Now we can call the sum() function like this:

// //returns the sum of the arguments between 1 and 9
// sum.apply(null, filter(1, 9, -3, 1, 0, 4, 8, 9, 12)); //22
// This looks great. We have now achieved the same result without affecting the sum() function and we have an independent function, filter(min, max), we can apply to other functions in addition to the sum() function.

// For example:

// //returns the multiplication of the arguments
// function multiplication() {
//   return Array.prototype.reduce.call(arguments, function(product, value) {
//     return product * value;
//   }, 1);
// }

// multiplication.apply(null, filter(1, 9, -3, 1, 0, 4, 8, 9, 12));  //288
// Now suppose we define the noNumbersFilter() function that removes those values that can not be added because they are not numeric:

// function filterNoNumbers() {
//   return Array.prototype.filter.call(arguments, function(value) {
//     return typeof value === 'number' && value === value && value !== Number.POSITIVE_INFINITY && value !== Number.NEGATIVE_INFINITY;
//   });
// }

// filterNoNumbers(-3, NaN, 1, 0, "2", 4, 8, 9, 12); // [-3, 1, 0, 4, 8, 9, 12]
// We could do the same and apply the filterNoNumbers() function in this way:

// sum.apply(null, filter.apply(null, [1, 9].concat(filterNoNumbers(-3, NaN, 1, 0, "2", 4, 8, 9, 12)))); // 22
// Even if it works, it starts to be a challenge to do this without errors.

// We can further complicate the problem if we want the result of the sum has to be rounded to two decimal digits. To do this, we define the round(decimals) function:

// function round(decimals) {
//   if (arguments.length === 2) {
//     return arguments[1].toFixed(decimals);
//   } else {
//     return Array.prototype.splice.call(arguments, 1).map(function(value) {
//       return value.toFixed(decimals);
//     });
//   }
// }

// round(2, 1, 2.1, 2.346); // ["1.00", "2.10", "2.35"]
// round(2, 1.3); // "1.30"
// And we use it in this way:

// round.apply(null, [2].concat(sum.apply(null, filter.apply(null, [1, 9].concat(filterNoNumbers(-3, 1.016, 0, 4, NaN, 8.041, '27', 9, 12)))))); // "22.06"
// It would be better if we could generalize the solution. This is where the decorator pattern comes into play.
// Work to do:
// Your work is implement the decorate(fn) function. Note that this function takes the function to decorate. The decorate(fn) function can also receive the parameters passed to the decorator functions. See the example below.

// When you call the decorate(fn) function, a decorated function will be returned. When this returned function is called, the function fn() passed in decorate(fn) will be called applying decorator functions.

// The Decorator(options) function is already implemented. Note that the function receives an object with two attributes before and after. These attributes are the decorator functions which apply before and after calling the function passed in decorate(fn), respectively. One or both may be null.

// The way to use these functions are as follows:

// var filterDecorator = new Decorator({
//   before : filter
// });

// var filterNoNumbersDecorator = new Decorator({
//   before : filterNoNumbers
// });

// var roundDecorator = new Decorator({
//   after: round
// });

// var decoratedSum = filterDecorator.decorate(sum, 1, 9); // 1 and 9 are the min and max parameters passed to the filter function
// decoratedSum = filterNoNumbersDecorator.decorate(decoratedSum);
// decoratedSum = roundDecorator.decorate(decoratedSum, 2); // rounded to two decimals

// decoratedSum(-3, 1.016, 0, 4, NaN, 8.041, '27', 9, 12); // "22.06"
// Good luck!
// Do not forget to vote this kata if you liked!

// Design Patterns Decorator   Object-oriented Programming Fundamentals

class Decorator {
    constructor(options) {
        if (!options) {
            options = {};
        }
        this.before = options.before;
        this.after = options.after;
    }
    decorate(fn) {
        return (...args) => {
            let modifiedArgs = args;
            if (this.before) modifiedArgs = this.before(...modifiedArgs);
            let result = fn(...modifiedArgs);
            if (this.after) result = this.after(result);
            return result;
        };
    }
}
  
