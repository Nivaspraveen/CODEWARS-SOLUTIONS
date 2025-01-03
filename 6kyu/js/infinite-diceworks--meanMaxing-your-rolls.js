// Description:
// Sequel (probably slighter harder): Infinite Diceworks: MeanMaxing your rolls (Quantum Mechanically)

// You recently developed the ability of MinMaxMeanMax, which means you can reroll a single dice roll as many times as you want, through the power of quantum mechanics or something! This should come in handy in many places where dice are involved, like this kata.

// But first, we need to talk about parallel universes, and how much better the odds become when you can roll simultaneously in many of them.

// Given the number of faces of the dice you're rolling 1<=dice<=1000 (the faces have values from 1 to dice) and number of rolls 2<=n<=100, calculate the difference between the mean of the maximum value of all the dice you rolled to the mean of the same but for just 1 roll.

// Due to the intrinsic quantum fluctuation among the parallel universes (or so you're told), the error for the calculation results will be noticable. However, you're okay if the results does not differ more than 1/10000 from the actual value.

// An example:

// meanMax(3,2) // Dice value: (1,2,3), rolls: 2
// // Possibilities are:
// // 1: (1,1)
// // 2: (1,2), (2,1), (2,2)
// // 3: (1,3), (2,3), (3,1), (3,2), (3,3)
// // Mean: (1*1 + 2*3 + 3*5) / 9 = 2.4444...
// // Rolling the dice once gives a mean of 2, so the answer is
// // 2.4444... - 2 = 0.4444...
// Additional challenge: Come up with at least 3 ways to solve this kata.

// Mathematics, Dynamic Programming, Recursion, Probability, Statistics, Puzzles

function meanMax(dice, n) {
    const meanSingle = (dice + 1) / 2;
    let meanMaxRolls = 0;
    for (let k = 1; k <= dice; k++) {
      const pMaxK = Math.pow(k / dice, n) - Math.pow((k - 1) / dice, n);
      meanMaxRolls += pMaxK * k;
    }
    return meanMaxRolls - meanSingle;
}