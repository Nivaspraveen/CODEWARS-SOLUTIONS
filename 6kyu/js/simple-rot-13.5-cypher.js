// Description:
// You are asked to write a simple cypher that rotates every character (in range [a-zA-Z], special chars will be ignored by the cipher) by 13 chars. As an addition to the original ROT13 cipher, this cypher will also cypher numerical digits ([0-9]) with 5 chars.

// Example:

// "The quick brown fox jumps over the 2 lazy dogs"
// will be cyphered to:

// "Gur dhvpx oebja sbk whzcf bire gur 7 ynml qbtf"
// Your task is to write a ROT13.5 (ROT135) method that accepts a string and encrypts it. Decrypting is performed by using the same method, but by passing the encrypted string again.

// Note: when an empty string is passed, the result is also empty.

// When passing your succesful algorithm, some random tests will also be applied. Have fun!

// Topics: Algorithms, Fundamentals, Ciphers, Cryptography

// function ROT135(input) {
//     const rotateChar = (char, start, range, shift) => String.fromCharCode(((char.charCodeAt(0) - start + shift) % range) + start);
//     return input.split('').map(char => {
//       if (/[a-z]/.test(char)) return rotateChar(char, 'a'.charCodeAt(0), 26, 13);
//       else if (/[A-Z]/.test(char)) return rotateChar(char, 'A'.charCodeAt(0), 26, 13);
//       else if (/[0-9]/.test(char)) return rotateChar(char, '0'.charCodeAt(0), 10, 5);
//       else return char;
//     }).join('');
// }

function ROT135(input) {
    const rotateChar = (char, start, range, shift) => String.fromCharCode(((char.charCodeAt(0) - start + shift) % range) + start);
    return input
      .split('')
      .map(char => 
          /[a-z]/.test(char)
          ? rotateChar(char, 'a'.charCodeAt(0), 26, 13)
          : /[A-Z]/.test(char)
          ? rotateChar(char, 'A'.charCodeAt(0), 26, 13)
          : /[0-9]/.test(char)
          ? rotateChar(char, '0'.charCodeAt(0), 10, 5)
          : char 
      ).join('')
}