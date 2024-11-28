// Description:
// Create two functions to encode and then decode a string using the Rail Fence Cipher. This cipher is used to encode a string by placing each character successively in a diagonal along a set of "rails". First start off moving diagonally and down. When you reach the bottom, reverse direction and move diagonally and up until you reach the top rail. Continue until you reach the end of the string. Each "rail" is then read left to right to derive the encoded string.

// For example, the string "WEAREDISCOVEREDFLEEATONCE" could be represented in a three rail system as follows:

// W       E       C       R       L       T       E
//   E   R   D   S   O   E   E   F   E   A   O   C  
//     A       I       V       D       E       N    
// The encoded string would be:

// WECRLTEERDSOEEFEAOCAIVDEN
// Write a function/method that takes 2 arguments, a string and the number of rails, and returns the ENCODED string.

// Write a second function/method that takes 2 arguments, an encoded string and the number of rails, and returns the DECODED string.

// For both encoding and decoding, assume number of rails >= 2 and that passing an empty string will return an empty string.

// Note that the example above excludes the punctuation and spaces just for simplicity. There are, however, tests that include punctuation. Don't filter out punctuation as they are a part of the string.

// Topics: Algorithms, Ciphers, Cryptography, Strings, Security

function encodeRailFenceCipher(string, numberRails) {
    if (numberRails < 2 || string === '') return string;
    let rails = Array.from({ length: numberRails }, () => []), rail = 0, direction = 1;
    for (let char of string) {
      rails[rail].push(char);
      rail += direction;
      if (rail === numberRails - 1 || rail === 0) direction = -direction;
    }
    return rails.flat().join('');
}
  
  function decodeRailFenceCipher(string, numberRails) {
    if (numberRails < 2 || string === '') return string;
    let railLengths = Array(numberRails).fill(0), rail = 0, direction = 1;
    for (let i = 0; i < string.length; i++) {
      railLengths[rail]++;
      rail += direction;
      if (rail === numberRails - 1 || rail === 0) direction = -direction;
    }
    let rails = [], start = 0; 
    for (let length of railLengths) { 
      rails.push(string.slice(start, start + length).split('')); 
      start += length; 
    }
    rail = 0;
    direction = 1;
    let result = [];
    for (let i = 0; i < string.length; i++) { 
      result.push(rails[rail].shift()); 
      rail += direction; if (rail === numberRails - 1 || rail === 0) direction = -direction;
    } 
    return result.join('');
}