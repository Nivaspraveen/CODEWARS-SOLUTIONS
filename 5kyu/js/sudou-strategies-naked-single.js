// Introduction
// The strategy used in this kata is part of a set of strategies aimed at people (not computers) to make progress in a Sudoku puzzle. The purpose is not to solve the entire puzzle. For this reason, a puzzle in this kata doesn't necessarily have a unique solution, if any. More info and examples of this and other strategies can be found at sudokuwiki. If you are new to Sudoku, you may find the glossary of Sudoku useful.

// Sudoku Kata Series
// Introduction Kata:

// Sudoku Strategies - Pencil Marks
// Beginner Level:

// Sudoku Strategies - Naked Single (this kata)
// Sudoku Strategies - Hidden Single
// Strategy
// The "Naked Single" stategy allows us to find a cell with only one remaining candidate.

// Task
// Given a sudoku puzzle, return the location and value of the element you found using the strategy.

// Input
// the puzzle is always 9x9 (9 rows, 9 cols)
// the input is a 2d array of numbers representing the puzzle
// 0: a cell of which the element value is not given
// 1-9: a cell of which the element is given (clue)
// there is at least one solution available
// Output
// the output is an array (or equivalent structure depending on language) containing the row, col and value of the element you found
// row index starts at 0 and goes from top to bottom
// col index starts at 0 and goes from left to right
// element value is in range of 1-9
// if there is more than one solution, you may return any of them
// Utlities
// a function render is available that stringifies the puzzle for your convenience; it could be used to log the puzzle to console
// when the output is invalid, this gets displayed in rncn notation (e.g. [0, 1, 3] -> r1c2=3)
// Examples
// The example tests show the puzzle in a stringified format for better visualisation.


// # puzzle:                     # stringified puzzle in examples

// [ [1,5,0,0,0,0,0,0,0],        1 5 . | . . . | . . .
//   [0,0,0,0,1,0,0,0,0],        . . . | . 1 . | . . .
//   [0,0,0,0,0,0,0,0,0],        . . . | . . . | . . .
//   [0,0,0,8,0,0,0,0,0],        ------+-------+------
//   [0,0,0,0,0,0,0,0,0],        . . . | 8 . . | . . .
//   [0,0,0,0,0,0,0,0,0],        . . . | . . . | . . .
//   [0,0,0,0,0,0,0,2,0],        . . . | . . . | . . .
//   [0,0,0,0,0,0,0,0,0],        ------+-------+------
//   [0,0,0,0,0,0,0,0,0] ]       . . . | . . . | . 2 .
//                               . . . | . . . | . . .
//                               . . . | . . . | . . .
// Last remaining cell in row, col or box
// The last remaining cell in any row, col or box has to take the last remaining element.


// # puzzle:               # found:

// 1 8 9 | . . . | . . .   # row: 1, col: 0, value: 3
// . 2 7 | . . . | . . .
// 6 5 4 | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . . . | . . . | . . .
// Elimination of candidates used in other peer cells
// A cell has to take the last remaining candidate if all other candidates are already taken by peer cells. A peer cell is a cell that shares either a row, col, box or combination with the source cell.


// # puzzle:               # found:

// . 1 7 | . . . | . . .   # row: 1, col: 1, value: 2
// . . . | . . 5 | . 6 .
// 8 3 . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . 4 . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . . | . . . | . . .
// . . . | . . . | . . .
// . 9 . | . . . | . . .
// Good luck, have fun!

// Puzzles, Algorithms, Game Solvers

function progress(puzzle) {
    const size = 9, boxSize = 3;
    const getCandidates = (row, col) => {
      const candidates = new Set(Array.from({ length: 9 }, (_, i) => i + 1));
      for (let i = 0; i < size; i++) candidates.delete(puzzle[row][i]);
      for (let i = 0; i < size; i++) candidates.delete(puzzle[i][col]);
      const startRow = Math.floor(row / boxSize) * boxSize, startCol = Math.floor(col / boxSize) * boxSize;
      for (let r = startRow; r < startRow + boxSize; r++) {
        for (let c = startCol; c < startCol + boxSize; c++) candidates.delete(puzzle[r][c]);
      }
      return Array.from(candidates);
    };
    for (let row = 0; row < size; row++) {
      for (let col = 0; col < size; col++) {
        if (puzzle[row][col] === 0) {
          const candidates = getCandidates(row, col);
          if (candidates.length === 1) return [row, col, candidates[0]];
        }
      }
    }
    return null;
}