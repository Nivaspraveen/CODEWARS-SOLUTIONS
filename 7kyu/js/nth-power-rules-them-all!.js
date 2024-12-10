// Description:
// You are provided with an array of positive integers and an additional integer n (n > 1).

// Calculate the sum of each value in the array to the nth power. Then subtract the sum of the original array.

// Examples
// {1, 2, 3}, 3  -->  (1^3 + 2^3 + 3^3 ) - (1 + 2 + 3)  -->  36 - 6  -->  30
// {1, 2}, 5     -->  (1^5 + 2^5) - (1 + 2)             -->  33 - 3  -->  30

// Fundamentals Mathematics Algorithms Algebra

function modifiedSum(a, n) {
    const sumOfPowers = a.reduce((a, b) => a + Math.pow(b, n), 0),
          sumOfOriginal = a.reduce((a, b) => a + b, 0);
    return sumOfPowers - sumOfOriginal;
}