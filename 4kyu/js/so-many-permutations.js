// Description:
// In this kata, your task is to create all permutations of a non-empty input string and remove duplicates, if present.

// Create as many "shufflings" as you can!

// Examples:

// With input 'a':
// Your function should return: ['a']

// With input 'ab':
// Your function should return ['ab', 'ba']

// With input 'abc':
// Your function should return ['abc','acb','bac','bca','cab','cba']

// With input 'aabb':
// Your function should return ['aabb', 'abab', 'abba', 'baab', 'baba', 'bbaa']
// Note: The order of the permutations doesn't matter.

// Good luck!

function permutations(string) {
	if (string.length <= 1) return [string];
  let allPermutations = new Set();
  for (let i = 0; i < string.length; i++) {
    let char = string[i];
    let remChars = string.slice(0, i) + string.slice(i + 1);
    for (let perm of permutations(remChars)) allPermutations.add(char + perm);
  }
  return [...allPermutations];
}