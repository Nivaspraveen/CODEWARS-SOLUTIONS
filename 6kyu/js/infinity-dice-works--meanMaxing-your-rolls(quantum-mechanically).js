// Description:
// The sequel of this kata.

// Back in the last kata, you developed the ability MinMaxMeanMax to reroll a particular dice roll as many times as you want, thanks to the power of parallel universes and choosing only the one maximum value you've got.

// However, you discovered that your actual odds were actually lower than what you calculated last time. Upon studying quantum mechanics, you realized your mistake: dices in different parallel universes are indistinguishable! You immediately dig up your program and try to correct it.

// Given the number of faces of the dice you're rolling 1<=dice<=1000 (the faces have values from 1 to dice) and number of rolls 2<=n<=100, calculate the difference between the mean of the maximum value of all the dice you rolled to the mean of the same but for just 1 roll. This time, outcomes consisting of the same value of dice but in different configuration are considered the same, because you can't distinguish individual dice from their superposition entangling all of the parallel universes. That's just how quantum mechanics works.

// Your results should be accurate up to 1/1000.

// An example:

// meanMaxQM(3,2) // Dice value: (1,2,3), rolls: 2
// // Possibilities are:
// // 1: (1,1)
// // 2: (1,2), (2,2) //Note that (2,1) doesn't count because it's the same as (1,2)
// // 3: (1,3), (2,3), (3,3)
// // Mean: (1*1 + 2*2 + 3*3) / (1+2+3) = 2.333...
// // Rolling the dice once gives a mean of 2, so the answer is: 2.333... - 2 = 0.333...

// Mathematics, Dynamic Programming, Recursion, Probability, Statistics, Puzzles

function meanMaxQM(dice, n) {
    const factorial = n => n <= 1 ? 1 : n * factorial(n - 1);
    const combinations = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));
    
    let sum = 0, count = 0;
    const generateCombinations = (curr, index) => {
      if (curr.length === n) {
        let maxVal = Math.max(...curr);
        sum += maxVal;
        count++;
        return;
      }
      for (let i = index; i <= dice; i++) generateCombinations([...curr, i], i);
    };
    generateCombinations([], 1);
    let meanMax = sum / count, meanSingleRoll = (dice + 1) / 2;
    return (meanMax - meanSingleRoll).toFixed(3);
}