// Introduction
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".

//  G => A
//  g => a
//  a => g
//  A => G
//  D => E
//   etc.
// The letters, which are not on the list of substitutes, stays in the encrypted text without changes.

// Other keys often used by Scouts:

// PO-LI-TY-KA-RE-NU
// KA-CE-MI-NU-TO-WY
// KO-NI-EC-MA-TU-RY
// ZA-RE-WY-BU-HO-KI
// BA-WO-LE-TY-KI-JU
// RE-GU-LA-MI-NO-WY
// Task
// Your task is to help scouts to encrypt and decrypt thier messages. Write the Encode and Decode functions.

// Input/Output
// The function should have two parameters.
// The message input string consists of lowercase and uperrcase characters and whitespace character.
// The key input string consists of only lowercase characters.
// The substitution has to be case-sensitive.

// Example
//  encode("ABCD", "agedyropulik");             // => GBCE 
//  encode("Ala has a cat", "gaderypoluki");    // => Gug hgs g cgt 
//  decode("Dkucr pu yhr ykbir","politykarenu") // => Dance on the table
//  decode("Hmdr nge brres","regulaminowy")  // => Hide our beers

// Topics: Fundamentals, Ciphers, Cryptography

const createCipher = key => {
    const map = new Map();
    for (let i = 0; i < key.length; i += 2) {
      const char1 = key[i], char2 = key[i + 1];
      map.set(char1, char2);
      map.set(char2, char1);
      map.set(char1.toUpperCase(), char2.toUpperCase());
      map.set(char2.toUpperCase(), char1.toUpperCase());
    }
    return map;
}
  
function encode(str,key) {
    const cipherMap = createCipher(key);
    let encodedMsg = '';
    for (const char of str) encodedMsg += cipherMap.get(char) || char;
    return encodedMsg;
}
  
function decode(str,key) {
    return encode(str, key);
}