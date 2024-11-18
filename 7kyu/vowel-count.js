// Description:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

function getCount(str) {
    const vowels = new Set(['a', 'e', 'i', 'o', 'u']);
    let count = 0;
    
    for (let char of str) {
      if (vowels.has(char)) count++;
    }
    return count
}