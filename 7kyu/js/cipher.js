// This cipher involves taking each character of a string and multiplying their char codes by 6.

// For example, `Hello World!` would become `ưɞʈʈʚÀȊʚʬʈɘÆ`.

// You must write two functions:
// `encode` to encode a given string,
// `decode` to decode a given string.

// Topics: Algorithms, Ciphers, Cryptography, Strings

const encode = (str) =>  str.split('').map(char => String.fromCharCode(char.charCodeAt(0) * 6)).join('');
  
const decode = str =>  str.split('').map(char => String.fromCharCode(char.charCodeAt(0) / 6)).join('');
