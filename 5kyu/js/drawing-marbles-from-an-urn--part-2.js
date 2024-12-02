// Description:
// Task
// Return the exact probability as a ratio of drawing at least target marbles of the specified color out of draws total draws without replacement from the specified urn.

// Input
// urn: an object depicting an urn where each key is a color (string), and each value the number of marbles of that color (integer)
// color: the color we are interested in (string)
// draws: the total number of draws from the urn, without replacement (integer)
// target: the least amount of marbles we want to draw from the urn (integer)
// Output
// return the exact probability as ratio (array with 2 elements; the numerator (big integer) and denominator (big integer))
// Constraints
// the ratio needs to be in compact form: [2, 4] should be [1, 2]
// the urn won't be empty
// the color is always available in the urn
// the amount of marbles by color is a non-negative integer
// the total amount of draws is a positive integer, and won't be more than the total number of marbles in the urn
// the target is a non-negative integer and won't be more than:
// the amount of marbles of the specified color
// the amount of draws
// Kata Series
// Drawing marbles from an urn - Part 1
// Drawing marbles from an urn - Part 2 (this kata)
// Drawing marbles from an urn - Part 3
// Good luck, have fun!

// Fundamentals, Combinatorics, Mathematics, Probability, Statistics