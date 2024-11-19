// Description:
// Given an array of positive or negative integers

//  I= [i1,..,in]

// you have to produce a sorted array P of the form

// [ [p, sum of all ij of I for which p is a prime factor (p positive) of ij] ...]

// P will be sorted by increasing order of the prime numbers. The final result has to be given as a string in Java, C#, C, C++ and as an array of arrays in other languages.

// Example:
// I = [12, 15]; //result = [[2, 12], [3, 27], [5, 15]]
// [2, 3, 5] is the list of all prime factors of the elements of I, hence the result.

// Notes:

// It can happen that a sum is 0 if some numbers are negative!
// Example: I = [15, 30, -45] 5 divides 15, 30 and (-45) so 5 appears in the result, the sum of the numbers for which 5 is a factor is 0 so we have [5, 0] in the result amongst others.

// In Fortran - as in any other language - the returned string is not permitted to contain any redundant trailing whitespace: you can use dynamically allocated character strings.

function isPrime(num) {
    if (num <= 1) return false;
    if (num <= 3) return true;
    if (num % 2 === 0 || num % 3 === 0) return false;
    for (let i = 5; i * i <= num; i += 6) {
      if (num % i === 0 || num % (i + 2) === 0) return false;
    }
    return true;
}
  
function getPrimeFactors(num) {
    let absNum = Math.abs(num);
    const factors = new Set();
    for (let i = 2; i <= absNum; i++) {
      if (isPrime(i) && absNum % i === 0) {
        factors.add(i);
        while (absNum % i === 0) absNum /= i;
      }
    }
    return factors;
}
  
function sumOfDivided(lst) {
    const primeFactorSums = new Map();
    for (const num of lst) {
      const primeFactors = getPrimeFactors(num);
      for (const prime of primeFactors) {
        if (!primeFactorSums.has(prime)) primeFactorSums.set(prime, 0);
        primeFactorSums.set(prime, primeFactorSums.get(prime) + num);
      }
    }
    return Array.from(primeFactorSums).sort((a, b) => a[0] - b[0]);
}