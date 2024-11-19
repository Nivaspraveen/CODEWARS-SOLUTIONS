// Description:
// See the sequences of the form:

// a
// ,
 
// (
// a
// +
// d
// )
// r
// ,
 
// (
// a
// +
// 2
// d
// )
// r
// 2
// ,
 
// (
// a
// +
// 3
// d
// )
// r
// 3
// ,
 
// …
// ,
 
// (
// a
// +
// (
// n
// −
// 1
// )
// d
// )
// r
// n
// −
// 1
// a, (a+d)r, (a+2d)r 
// 2
//  , (a+3d)r 
// 3
//  , …, (a+(n−1)d)r 
// n−1
 
// Make a code that gives the result of the total sum of these n terms of the sequence.

// See the example: a = 1; d = 2; r = 2; n = 4

// The terms are 1, 6, 20, 56 and the total sum of them is equal to 83.

// The needed function will take in the arguments in the following order: tot_sum_arith_geom(a, d, r, n)

// The above case will be:

// totSumArithGeom(1, 2, 2, 4) ---> 83;
// The value of a, d or r may be a decimal value, too:

// var a = 1, d = 2, r = 0.5, n = 5;
// totSumArithGeom(a, d, r, n) ---> 5.1875;

// var a = 0.99, d = 2, r = 0.777, n = 10;
// totSumArithGeom(a, d, r, n) ---> 25.6329345646;

// var a = 0.99, d = 0.333333, r = 0.777, n = 100;
// totSumArithGeom(a, d, r, n) ---> 9.64768527243; 
// Your code will be tested with a great amount of terms up to 5000 in 400 random tests.

// Brute force algorithms are not recommended.

// Enjoy it!!

// TOPICS: Fundamentals Mathematics

function totSumArithGeom(a, d, r, n){
    if (r === 1) {
      const sumGeo = n, sumWeightedGeo = (n * (n - 1)) / 2;
      return a * sumGeo + d * sumWeightedGeo;
    }
    const sumGeo = (1 - Math.pow(r, n)) / (1 - r);
    const sumWeightedGeo = (r * (1 - n * Math.pow(r, n - 1) + (n - 1) * Math.pow(r, n))) / Math.pow(1 - r, 2);
    return a * sumGeo + d * sumWeightedGeo;
}