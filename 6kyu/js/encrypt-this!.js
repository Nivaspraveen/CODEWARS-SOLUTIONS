// Description:
// Acknowledgments:
// I thank yvonne-liu for the idea and for the example tests :)

// Description:
// Encrypt this!

// You want to create secret messages which can be deciphered by the Decipher this! kata. Here are the conditions:

// Your message is a string containing space separated words.
// You need to encrypt each word in the message using the following rules:
// The first letter must be converted to its ASCII code.
// The second letter must be switched with the last letter
// Keepin' it simple: There are no special characters in the input.
// Examples:
// encryptThis("Hello") === "72olle"
// encryptThis("good") === "103doo"
// encryptThis("hello world") === "104olle 119drlo"

// Topics: Fundamentals, Strings, Regular Expressions, Arrays, Ciphers, Algorithms, Cryptography, Security

var encryptThis = function(text) {
    return text.split(' ').map(word => {
      if (word.length === 1) return word.charCodeAt(0);
      let firstChar = word.charCodeAt(0);
      if (word.length > 2) {
        let secondChar = word[1], lastChar = word[word.length - 1];
        word = word[0] + lastChar + word.slice(2, word.length - 1) + secondChar; 
      }
      else word = word[0] + word[1];
      return firstChar + word.slice(1);
    }).join(' ');
}