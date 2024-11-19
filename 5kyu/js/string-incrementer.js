// Description:
// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    const numberMatch = strng.match(/(\d*)$/);
    const numberPart = numberMatch[0];
    const textPart = strng.slice(0, -numberPart.length);
    if (numberPart === '') return strng + '1';
    else {
      const incNumber = (parseInt(numberPart) + 1).toString();
      const paddedNum = incNumber.padStart(numberPart.length, '0');
      return textPart + paddedNum;
    }
}