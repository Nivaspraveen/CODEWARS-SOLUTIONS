// Description:
// Introduction
// The GADERYPOLUKI is a simple substitution cypher used in scouting to encrypt messages. The encryption is based on short, easy to remember key. The key is written as paired letters, which are in the cipher simple replacement.

// The most frequently used key is "GA-DE-RY-PO-LU-KI".

//  g => a
//  a => g
//  d => e
//  e => d
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
// Our scouts had party yestarday and they had too much milk and cookies. As the result all of them forgot the key. Your task is to help scouts to find the key that they used for encryption. Fortunately they have some messages that are already encoded. However they like order and cleanup. So they sorted all messages and encrytpted messages in alphabethic order. But... it means they do not know what encrypts to what...
// Help the scouts to find their key.

// Input
// The function accepts two arrays.
// The messages string array consists of lowercase characters. The strings on the messages array are scout's messages before encrytption.
// The secrets string array consists of lowercase characters.
// The strings on the secrets array are scout's messages after encrytption.
// All strings in the messages and secrets have the same lenght (up to 20 characters).
// The number of elements in the messages and secrets is equal and less than 6.
// Every string from messages array after encoding is equal to one of elements in the secrets array (i.e. the 1st string from messages array afer encoding is equal to 5th string in the secrets array, the 2nd string from messages array afer encoding is equal to 3th string in the secrets array, etc.).

// Output
// Return string should consists of lowercase characters only. The pairs of substitution should be ordered by the first letter of substitution. The letters in each pair should be in alphabethic order.

// ga => incorret output (error: g is after a )
// ag => correct output  
// deag => incorrect output  (error: de is after ag)
// agde => correct output  
// Example
//  var messages = [ "dance", "level", "right", "yours" ];
//  var secrets =  [ "dkucr", "elghy", "irvri", "tpnes" ];
//  searchForKey(messages, secrets);   //=> akerilnuopty
 
// // because akerilnuopty can encode all secrets:
// // messages[0] = encode( secrets[0], "akerilnuopty")
// // messages[1] = encode( secrets[2], "akerilnuopty")
// // messages[2] = encode( secrets[1], "akerilnuopty")
// // messages[3] = encode( secrets[3], "akerilnuopty")
// Suggestion
// The key will have 12 letters. The brutal force may not work. 12 letters give us 4 626 053 752 320 000 combinations.
// The performance of your solution may be the key to pass the kata. There will be 100 random tests to check your solution.
// Try to solve the ohter katas from GADERYPOLUKI collection first. It will be easier for you to solve this kata.

// Topics: Performance, Algorithms, Ciphers, Cryptography

function searchForKey(mes, sec) {
    function* permute(array, n = array.length) {
      if (n <= 1) yield array.slice();
      for (let i = 0; i < n; i++) {
        yield* permute(array, n - 1);
        const j = n % 2 ? 0 : i;
        [array[j], array[n - 1]] = [array[n - 1], array[j]];
      }
    }
  
    function getMapping(message, secret) {
      const mapping = {};
      for (let i = 0; i < message.length; i++) {
        const mChar = message[i], sChar = secret[i];
          if (mChar === sChar) continue; 
          mapping[mChar] = sChar;
          mapping[sChar] = mChar;
      }
      return mapping;
    }
  
    function isValidMapping(mapping) {
      const reverseMapping = {};
      for (const [key, value] of Object.entries(mapping)) {
        if (reverseMapping[value] && reverseMapping[value] !== key) return false; 
        reverseMapping[value] = key;
      }
      return true;
    }
  
    for (const permutedSecrets of permute(sec)) {
      let combinedMapping = {}, valid = true;
      for (let i = 0; i < mes.length; i++) {
        const mapping = getMapping(mes[i], permutedSecrets[i]);
        combinedMapping = { ...combinedMapping, ...mapping };
        if (!isValidMapping(combinedMapping)) {
          valid = false;
          break;
        }
      }
  
      if (valid) {
        const pairs = new Set();
        for (const [char, mappedChar] of Object.entries(combinedMapping)) {
          const pair = char < mappedChar ? char + mappedChar : mappedChar + char;
          pairs.add(pair);
        }
        return Array.from(pairs).sort().join('');
      }
    }
    return 'noidea';
}