// Description:
// https://i.imgur.com/Z7HiIU4.jpg?1

// Cramer (1704 -1752), the swiss mathematician that created a method to solve systems of n linear equations with n variables.

// We have a linear system of n Equations with n Variables like the following:

// https://i.imgur.com/IK2keV7.jpg?1

// The subindexed values a11, a12, .....ann, are the coefficients of the different variables x1, x2, ....., xn.

// We define Δ (delta), the determinant of the matrix of the coefficients as it follows:

// https://i.imgur.com/zvVIYVB.png?1

// You may calculate the determinant also by the way is explained at the kata Matrix Determinant. See at: http://www.codewars.com/kata/matrix-determinant

// You may learn also to calculate the determinant: https://en.wikipedia.org/wiki/Determinant

// Then, we define the vector, V, with the independent terms b1, b2, ...., bn:

// https://i.imgur.com/m6m20id.png?1

// We will obtain the determinants for each variable replacing the vector V for a column in the position of the variable. Δx1, the determinant for the variable x1, Δx2, the determinant for the variable x2 and so on. It is as follows:

// https://i.imgur.com/GaEIFJV.png?1

// So the values of the variables are:

// https://i.imgur.com/GMANk3Y.png?1

// We should know that a linear equation system may be solvable, unsolvable or indeterminate as the following chart shows below:

// If Δ ≠ 0 , the equation system is solvable. Each variable will have a value.

// If Δ = 0: the system will be Unsolvable if one of the variables Δxi is not 0 or the system will be Indeterminate or Unsolvable if all the values of Δxi are 0.

// For that purpose we need a function cramer_solver(), that will accept two arguments, matrix and vector.

// The function will output the array with the following results and order:

// [Δ, Δx1, Δx2,........,Δxn]
// But if Δ = 0 and all the Δxi are 0, the code will output "Indeterminate or Unsolvable". If Δ = 0 and at least only one Δxi ≠ 0, the code will output "Unsolvable".

// If matrix is not square (equal amount of rows and columns) or the lengths of matrix and vector V are different, the code will "Check entries".

// Let's see how to solve some example using maths and how the results would be.

// We want to solve the following system of equations:

// 4x - 6y - 3z = 12
//  x +  y - 2z = 3
// 4x -20y - 4z = 6
// So the function will receive the following matrix and vector:

// var matrix =[[4,-6, -3], [ 1 , 1, -2], [4, -20, -4]];
// var vector = [12, 3, 6];
// cramerSolver(matrix, vector) == [-80, -330, -30, -60];
// Another case:

// x + y - 3z = -10
// x + y - 2z = 3
// x + y - 4z = -6
// So our solver will receive our matrix and vector:

// var matrix = [[1, 1, -3], [1, 1, -2], [1, 1, -4]];
// var vector = [-10, 3, -6];
// cramerSolver(matrix, vector) == "Unsolvable"
// Let's see one more:

// x + y - 3z = 0
// x + y - 2z = 0
// x + y - 4z = 0
// The matrix and vector for this case:

// var matrix = [[1, 1, -3], [1, 1, -2], [1, 1, -4]];
// var vector = [0, 0, 0];
// cramerSolver(matrix, vector) == "Indeterminate or Unsolvable"
// If we introduce a matrix that is not square, the function should detect it.

// var matrix = [[1, 1, -3, 4], [1, 1, -2, 3], [1, 1, -4, 2]];
// var vector = [0, 0, 0];
// cramer_solver(matrix, vector) == "Check entries"
// Also cases where one (or more) row(s) has (have) different lengths.

// var matrix = [[1, 1, -3], [1, 1], [1, 1, -4]];
// var vector = [-10, 3, -6];
// cramerSolver(matrix, vector) == "Check entries"
// The cases when the dimension of matrix is different than the length of vector should be detected, too.

// var matrix = [[1, 1, -3, 4], [1, 1, -2, 3], [1, 1, -4, 2], var [6, 4, 2, 1]];
// vector = [1, 1, 1];
// cramerSolver(matrix, vector) == "Check entries"
// The coefficients of the equation will be integer values for all the cases, so the array output should have only integers

// The tests will challenge your code for linear equations systems up to 8 variables (and 8 equations obviously)

// Enjoy it!!

// Fundamentals Data Structures Arrays Mathematics Algebra

function determinant(matrix) {
    const n = matrix.length;
    if (n === 1) return matrix[0][0];
    if (n === 2) return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
    let det = 0;
    for (let i = 0; i < n; i++) {
      const subMatrix = matrix.slice(1).map(row => row.filter((_, colIndex) => colIndex !== i));
      det += matrix[0][i] * determinant(subMatrix) * (i % 2 === 0 ? 1 : -1);
    }
    return det;
}
  
function cramerSolver(matrix,vector) { 
    const n = matrix.length;
    if (!Array.isArray(matrix) || !Array.isArray(vector) || n === 0) return 'Check entries';
    if (matrix.some(row => !Array.isArray(row) || row.length !== n)) return "Check entries";
    if (vector.length !== n) return "Check entries";
    
    const delta = determinant(matrix);
    if (delta === 0) {
      const deltas = [];
      for (let i = 0; i < n; i++) {
        const replacedMatrix = matrix.map((row, rowIndex) => row.map((val, colIndex) => colIndex === i ? vector[rowIndex] : val));
        deltas.push(determinant(replacedMatrix));
       }
       if (deltas.every(det => det === 0)) return "Indeterminate or Unsolvable";
       return "Unsolvable";
    }
    const result = [delta];
    for (let i = 0; i < n; i++) {
      const replacedMatrix = matrix.map((row, rowIndex) => row.map((val, colIndex) => colIndex === i ? vector[rowIndex] : val));
      result.push(determinant(replacedMatrix));
    }
    return result;
}
  