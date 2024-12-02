// Description:
// Given
// Given two urns urn1 and urn2, a fair coin is tossed. On heads, a marble from urn1 is drawn, on tails one from urn2. The color of this marble is color.

// Task
// Return the exact probability as a ratio that the marble was drawn from urn1.

// Input
// urn1: an object depicting an urn where each key is a color (string), and each value the number of marbles of that color (integer)
// urn2: an object depicting an urn where each key is a color (string), and each value the number of marbles of that color (integer)
// color: the color of the marble drawn from the urn that got picked after tossing a coin
// Output
// return the exact probability as ratio that the marble was drawn from urn1 (array with 2 elements; the numerator (big integer) and denominator (big integer))
// Constraints
// the ratio needs to be in compact form: [2, 4] should be [1, 2]
// urn1 and urn2 contain at least 1 marble
// the amount of marbles in both urns are reported before one marble is drawn from one of the urns
// the color is always available as key in both urns
// at least one of both urns has at least one marble of the given color
// the amount of marbles by color is a non-negative integer

// Good luck, have fun!

// Fundamentals, Combinatorics, Mathematics, Probability, Statistics

function probability(urn1, urn2, color) {
    const gcd = (a, b) => (b === 0n ? a : gcd(b, a % b));
    
    const getMarbleProbability = (urn1, urn2, color) => {
      const urn1Marbles = BigInt(urn1[color]), 
            urn2Marbles = BigInt(urn2[color]),
            totalUrn1Marbles = Object.values(urn1).reduce((a, b) => a + BigInt(b), 0n),
            totalUrn2Marbles = Object.values(urn2).reduce((a, b) => a + BigInt(b), 0n);
      
      const numerator = urn1Marbles * totalUrn2Marbles, 
            denominator = urn1Marbles * totalUrn2Marbles + urn2Marbles * totalUrn1Marbles;
      
      if (numerator === 0n || denominator === 0n) return [0n, 1n];
      
      const divisor = gcd(numerator, denominator);
      return [numerator / divisor, denominator / divisor];
    }
    return getMarbleProbability(urn1, urn2, color);
}