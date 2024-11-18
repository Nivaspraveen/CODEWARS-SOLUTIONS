// Description:
// You are going to be given a non-empty string. Your job is to return the middle character(s) of the string.

// If the string's length is odd, return the middle character.
// If the string's length is even, return the middle 2 characters.
// Examples:
// "test" --> "es"
// "testing" --> "t"
// "middle" --> "dd"
// "A" --> "A"

function getMiddle(s){
    const word = s.length;
    const middle = Math.floor(word / 2);
    if (word % 2 === 0) return s[middle - 1] + s[middle];
    else return s[middle];
  }