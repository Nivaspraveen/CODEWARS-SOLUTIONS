// Description:
// A genetic algorithm is based in groups of chromosomes, called populations. To start our population of chromosomes we need to generate random binary strings with a specified length.

// In this kata you have to implement a function generate that receives a length and has to return a random binary strign with length characters.

// http://i.imgur.com/XW7Ys4n.gif

// Example:
// Generate a chromosome with length of 4 generate(4) could return the chromosome 0010, 1110, 1111... or any of 2^4 possibilities.

// Note: Some tests are random. If you think your algorithm is correct but the result fails, trying again should work.


// TOPICS: Strings, Fundamentals, Genetic Algorithms, Algorithms

const generate = length => {
    let result = '';
    for (let i = 0; i < length; i++) result += Math.random() < 0.5 ? '0' : '1';
    return result;
};