// Description:
// Task
// Let's say we have a positive integer, n. 
// You have to find the smallest possible positive integer that when multiplied by n, becomes a perfect power of integer k.
// A perfect power of k is any positive integer that can be represented as a k. 
// For example if k=2, then 36 is a perfect power of k, but 27 isn't.

// Examples
// n, k = 100, 3  return  10, #because 10*100 becomes 1000, and 1000 = 10**3
// n, k = 36, 2   return   1, #because 36 is already a perfect square 6**2
// n, k = 72, 4   return  18, #because 18*72 = 1296 = 6**4
// Notes:

// k,n∈N 
// k,n∈N and 
// 1<n<106,
// 1<k<10
// 1<n<106, 1<k<10
// However, the output may be way larger than 106106.
// If you have trouble seeing the numbers, refresh your page ;-) Please rate this kata. All translations are welcome.

// ABOVE: If you see this:, refresh your page.

// Mathematics Algebra Algorithms

function mulPower(n, k) {
    const primeFactors = num => {
      const factors = {};
      let bigNum = BigInt(num)
      for (let i = 2n; i * i <= bigNum; i++) {
        while (bigNum % i === 0n) {
          factors[i] = (factors[i] || 0) + 1;
          bigNum /= i;
        }
      }
      if (bigNum > 1n) factors[bigNum] = 1;
      return factors;
    };
    
    const factors = primeFactors(BigInt(n));
    let multiplier = 1n;
    for (const [prime, exp] of Object.entries(factors)) {
      const bigPrime = BigInt(prime), rem = BigInt(exp) % BigInt(k);
      if (rem !== 0n) multiplier *= bigPrime ** (BigInt(k) - rem);
    }
    return multiplier;
}