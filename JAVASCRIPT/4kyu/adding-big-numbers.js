// Description:
// We need to sum big numbers and we require your help.

// Write a function that returns the sum of two numbers. The input numbers are strings and the function must return a string.

// Example
// add("123", "321"); -> "444"
// add("11", "99");   -> "110"
// Notes
// The input numbers are big.
// The input is a string of only digits
// The numbers are positives

function add(a, b) {
    let result = '';
    let carry = 0;
    
    const maxLength = Math.max(a.length, b.length);
    a = a.padStart(maxLength, '0');
    b = b.padStart(maxLength, '0');
    
    for (let i = maxLength - 1; i >= 0; i--) {
      const d1 = parseInt(a[i], 10);
      const d2 = parseInt(b[i], 10);
      const sum = d1 + d2 + carry;
      carry = Math.floor(sum / 10);
      result = (sum % 10).toString() + result;
    }
    if (carry > 0) result = carry.toString() + result;
    return result;
}