// Description:
// An integer partition of n is a weakly decreasing list of positive integers which sum to n.

// For example, there are 7 integer partitions of 5:

// [5], [4,1], [3,2], [3,1,1], [2,2,1], [2,1,1,1], [1,1,1,1,1].
// Write a function which returns the number of integer partitions of n. The function should be able to find the number of integer partitions of n for n at least as large as 100.

function partitions(n) {
    const dp = Array(n + 1).fill(0);
    dp[0] = 1;
    for (let i = 1; i <= n; i++) {
      for (let j = i; j <= n; j++) dp[j] += dp[j - i];
    }
    return dp[n];
}