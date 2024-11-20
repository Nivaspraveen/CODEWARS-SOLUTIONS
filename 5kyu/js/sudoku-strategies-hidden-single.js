// Introduction
// The strategy used in this kata is part of a set of strategies aimed at people (not computers) to make progress in a Sudoku puzzle. The purpose is not to solve the entire puzzle. For this reason, a puzzle in this kata doesn't necessarily have a unique solution, if any. More info and examples of this and other strategies can be found at sudokuwiki. If you are new to Sudoku, you may find the glossary of Sudoku useful.

// Sudoku Kata Series
// Introduction Kata:

// Sudoku Strategies - Pencil Marks
// Beginner Level:

// Sudoku Strategies - Naked Single
// Sudoku Strategies - Hidden Single (this kata)
// Strategy
// The "Hidden Single" stategy allows us to find a candidate with only one remaining cell in a given group (row/col/box).

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
// Elimination of cells
// A candidate has to be placed in the last remaining cell in a group, if that candidate can no longer be placed in any other cell within that group.


// # puzzle:               # found:

// . 4 . | . . . | . . .   # row: 8, col: 0, value: 4
// . . . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . 4 | . . . | . . .
// . . . | . . . | . . .
// . . . | . . . | . . .
// ------+-------+------
// . . . | . . 4 | . . .
// 8 . . | . . . | . . .
// . . . | . . . | . . .
// Last remaining candidate in row, col or box
// The last remaining candidate in any row, col or box has to be placed in the last remaining cell. Those of you that solved the previous kata will notice that this specific configuration can also be solved using the "Naked Single" strategy.


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
// Footnote
// If you master both "Naked Single" and "Hidden Single" strategies, you're able to solve practically every Sudoku puzzle aimed at "Beginner" level.

// Good luck, have fun!

// Puzzles, Algorithms, Game Solvers

function progress(puzzle) {
    const size = 9, boxSize = 3;
    const getCandidates = (row, col) => {
      const candidates = new Set(Array.from({ length: 9 }, (_, i) => i + 1));
      for (let i = 0; i < size; i++) {
        candidates.delete(puzzle[row][i]);
        candidates.delete(puzzle[i][col]);
      }
      // Box
      const startRow = Math.floor(row / boxSize) * boxSize, startCol = Math.floor(col / boxSize) * boxSize;
      for (let r = startRow; r < startRow + boxSize; r++) {
        for (let c = startCol; c < startCol + boxSize; c++) candidates.delete(puzzle[r][c]);
      }
      return Array.from(candidates);
    };
    const groups = [
      ...Array.from({ length: size}, (_, i) => ({ type: 'row', index: i})),
      ...Array.from({ length: size}, (_, i) => ({ type: 'col', index: i})),
      ...Array.from({ length: size}, (_, i) => ({ type: 'box', index: i})),
    ];
    for (const {type, index} of groups) {
      const candidateLoc = Array.from({ length: size }, () => []);
      for (let i = 0; i < size; i++) {
        let row, col;
        if (type === 'row') {
          row = index;
          col = i;
        } else if (type === 'col') {
          row = i;
          col = index;
        } else {
          row = Math.floor(index / boxSize) * boxSize + Math.floor(i / boxSize);
          col = (index % boxSize) * boxSize + (i % boxSize);
        }
        if (puzzle[row][col] === 0) {
          for (const candidate of getCandidates(row, col)) candidateLoc[candidate - 1].push([row, col]);
        }
      }
      for (let num = 1; num <= size; num++) {
        if (candidateLoc[num - 1].length === 1) {
          const [row, col] = candidateLoc[num - 1][0];
          return [row, col, num];
        }
      }
    }
    return [];
}