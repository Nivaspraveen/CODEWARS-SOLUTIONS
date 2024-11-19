// Description:
// Given a positive BigInt n, where n is a power of 10 (i.e., n = 10, 100, 1000, 10000, etc.). Your task is to calculate the sum of all digits of all numbers from 1 to n inclusive.

// Examples
// For n = 10:

// 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
// For n = 100:

// 1 + 2 + 3 + ... + 9 + (1 + 0) + ... + (9 + 9) + (1 + 0 + 0) = 901
// If n is not power of 10 or n = 0 than result is 0

// n = 0    | -> 0
// n = 123  | -> 0
// Notes
// Use BigInt
// Efficiency: Your solution should have constant time complexity O(1).
// Optimization: Use mathematical formulas or patterns specific to powers of 10.
// Avoid: Do not iterate through each number from 1 to n for large n.
// Random n: Tests with random BigInt are included.
// Good luck and happy coding!

// TOPICS: Mathematics Algorithms Puzzles

function sumOfDigits(n) {
    n = BigInt(n);
    if (n <= 0n) return 0n;
    let strN = n.toString();
    if (strN[0] !== '1' || !/^10*$/.test(strN)) return 0n;
    if (n === 1n) return 1n;
    let k = BigInt(strN.length - 1);
    return 45n * k * (10n ** (k - 1n)) + 1n;
}