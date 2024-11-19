// Description:
// Instructions
// Given a mathematical expression as a string you must return the result as a number.

// Numbers
// Number may be both whole numbers and/or decimal numbers. The same goes for the returned result.

// Operators
// You need to support the following mathematical operators:

// Multiplication *
// Division / (as floating point division)
// Addition +
// Subtraction -
// Operators are always evaluated from left-to-right, and * and / must be evaluated before + and -.

// Parentheses
// You need to support multiple levels of nested parentheses, ex. (2 / (2 + 3.33) * 4) - -6

// Whitespace
// There may or may not be whitespace between numbers and operators.

// An addition to this rule is that the minus sign (-) used for negating numbers and parentheses will never be separated by whitespace. I.e all of the following are valid expressions.

// 1-1    // 0
// 1 -1   // 0
// 1- 1   // 0
// 1 - 1  // 0
// 1- -1  // 2
// 1 - -1 // 2
// 1--1   // 2

// 6 + -(4)   // 2
// 6 + -( -4) // 10
// And the following are invalid expressions

// 1 - - 1    // Invalid
// 1- - 1     // Invalid
// 6 + - (4)  // Invalid
// 6 + -(- 4) // Invalid
// Validation
// You do not need to worry about validation - you will only receive valid mathematical expressions following the above rules.

// Restricted APIs
// NOTE: Both eval and Function are disabled.


const calc = function (expression) {
    let index = 0;
  
    function getToken() {
      while (index < expression.length && expression[index] === ' ') index++;
      if (index >= expression.length) return null;
      let numberMatch = expression.slice(index).match(/^(\d+(\.\d*)?|\.\d+)/);
      if (numberMatch) {
        index += numberMatch[0].length;
        return parseFloat(numberMatch[0]);
      }
      let char = expression[index++];
      if ('+-*/()'.includes(char)) return char;
      throw new Error("Unexpected character");
    }
  
    function parsePrimary() {
      let token = getToken();
      if (typeof token === 'number') return token;
      if (token === '(') {
        let expr = parseExpression();
        if (getToken() !== ')') throw new Error("Expected ')'");
        return expr;
      }
      if (token === '-') return -parsePrimary();
      throw new Error("Expected a number or '('");
    }
  
    function parseTerm() {
      let left = parsePrimary(), token;
      while ((token = getToken()) === '*' || token === '/') {
        let right = parsePrimary();
        left = token === '*' ? left * right : left / right;
      }
      if (token) index--; // Step back if token wasn't * or /
      return left;
    }
  
    function parseExpression() {
      let left = parseTerm(), token;
  
      while ((token = getToken()) === '+' || token === '-') {
        let right = parseTerm();
        left = token === '+' ? left + right : left - right;
      }
      if (token) index--; // Step back if token wasn't + or -
      return left;
    }
  
    return parseExpression();
};