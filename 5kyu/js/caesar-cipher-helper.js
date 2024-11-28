// Description:
// Write a class that, when given a string, will return an uppercase string with each letter shifted forward in the alphabet by however many spots the cipher was initialized to.

// For example:

// var c = new CaesarCipher(5); // creates a CipherHelper with a shift of five
// c.encode('Codewars'); // returns 'HTIJBFWX'
// c.decode('BFKKQJX'); // returns 'WAFFLES'
// If something in the string is not in the alphabet (e.g. punctuation, spaces), simply leave it as is.
// The shift will always be in range of [1, 26].

// Topics: Ciphers, Object-oriented Programming, Strings, Algorithms

var CaesarCipher = function (shift) {
    this.shift = shift % 26;
    
    this.encode = function(str) {
      return str.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
          let base = char.charCodeAt(0) < 97 ? 65 : 97;
          return String.fromCharCode((char.charCodeAt(0) - base + this.shift) % 26 + base).toUpperCase();
        }
        return char;
      }).join('');
    };
    
    this.decode = function(str) {
      return str.split('').map(char => {
        if (char.match(/[a-zA-Z]/)) {
          let base = char.charCodeAt(0) < 97 ? 65 : 97;
          return String.fromCharCode((char.charCodeAt(0) - base - this.shift + 26) % 26 + base).toUpperCase();
        }
        return char;
      }).join('');
    };
};