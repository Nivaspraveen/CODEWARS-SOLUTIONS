// Description:
// Introduction
// Take a list of n numbers a1, a2, a3, ..., aN to start with.

// Arithmetic mean (or average) is the sum of these numbers divided by n.

// Geometric mean (or average) is the product of these numbers taken to the nth root.

// Example
// List of numbers: 1, 3, 9, 27, 81

// n = 5
// Arithmetic mean = (1 + 3 + 9 + 27 + 81) / 5 = 121 / 5 = 24.2
// Geometric mean = (1 * 3 * 9 * 27 * 81) ^ (1/5) = 59049 ^ (1/5) = 9
// Task
// You will be given a list of numbers and their arithmetic mean. However, the list is missing one number. Using this information, you must figure out and return the geometric mean of the FULL LIST, including the number that's missing.

// Mathematics Algorithms Algebra

function geo_mean(nums, arith_mean) {
    const n = nums.length + 1,
          totalSum = arith_mean * n,
          knownSum = nums.reduce((a, b) => a + b, 0),
          missingNumber = totalSum - knownSum,
          fullList = [...nums, missingNumber],
          product = fullList.reduce((a, b) => a * b, 1),
          geometricMean = Math.pow(product, 1 / n);
    return geometricMean;
}