// Description:
// Background
// We all know about "balancing parentheses" (plus brackets, braces and chevrons) and even balancing characters that are identical.

// Read that last sentence again, I balanced different characters and identical characters twice and you didn't even notice... :)

// Kata
// Your challenge in this kata is to write a piece of code to validate that a supplied string is balanced.

// You must determine if all that is open is then closed, and nothing is closed which is not already open!

// You will be given a string to validate, and a second string, where each pair of characters defines an opening and closing sequence that needs balancing.

// You may assume that the second string always has an even number of characters.

// Example
// // In this case '(' opens a section, and ')' closes a section
// isBalanced("(Sensei says yes!)", "()")       // => True
// isBalanced("(Sensei says no!", "()")         // => False

// // In this case '(' and '[' open a section, while ')' and ']' close a section
// isBalanced("(Sensei [says] yes!)", "()[]")   // => True
// isBalanced("(Sensei [says) no!]", "()[]")    // => False

// // In this case a single quote (') both opens and closes a section
// isBalanced("Sensei says 'yes'!", "''")       // => True
// isBalanced("Sensei say's no!", "''")         // => False

function isBalanced(s, caps) {
    const stack = [], capPairs = [];
    for (let i = 0; i < caps.length; i += 2) capPairs[caps[i + 1]] = caps[i];
    for (let i = 0; i < s.length; i++) {
      const char = s[i];
      if (Object.values(capPairs).includes(char) && (!stack.length || stack[stack.length - 1] !== char || char !== capPairs[char])) stack.push(char);
      else if (Object.keys(capPairs).includes(char)) {
        if (stack.length === 0 || stack.pop() !== capPairs[char]) return false;
      }
    }
    return stack.length === 0;
}