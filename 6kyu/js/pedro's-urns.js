// Description:
// Pedro's Urns
// Pedro has n urns, numbered from 0 to n-1. Each urn i contains r_i red balls and b_i black balls.

// Pedro removes a random ball from urn i = 0 and places it in urn i = 1. For the next step, he removes a random ball from urn i = 1 and places it inside urn i = 2. He repeats this process until he reaches the final i = n-1 urn.

// Your task is to return the probability that Pedro's last ball is red.

// Example
// You will receive the number of urns and two arrays, one indicating the number of black balls in each i-th urn and the other, indicating the number of red balls in each i-th urn, where 0 <= i <= n-1 is the array index.

// n = 2, b = [9, 4], r = [1, 5]
// In the above example, there are 9 black balls and 1 red ball in urn i=0 and 4 black balls and 5 red balls in urn i=1.

// Pedro has 10% chance of picking a red ball and 90% chance of picking a black ball in urn 0.
// After placing his chosen ball in the last urn, 1, he has 10% * 60% + 90% * 50% = 51% chance of getting a red ball and 10% * 40% + 90% * 50% = 49% chance of picking a black ball.
// Therefore, for this example, the chance that Pedro retrieves a red ball from the last urn is 51%

// Format
// Return the probability that Pedro's last ball is red as a number between 0 and 1: For example, 51% must be returned as 0.51.

// Returned values will be tested for correctness to within a tolerance of 1e-6.

// Ranges
// 1 <= b_i, r_i <= 5000
// 2 <= n <= 1000
// Probability

function getProbability(n, b, r) {
    let pRed = r[0] / (r[0] + b[0]);
    for (let i = 1; i < n; i++) {
      const totalBalls = r[i] + b[i] + 1,
            pRedAdded = (r[i] + 1) / totalBalls,
            pRedOriginal = r[i] / totalBalls;
      pRed = pRed * pRedAdded + (1 - pRed) * pRedOriginal;
    }
    return pRed;
}