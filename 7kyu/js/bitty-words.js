// Description:
// Your friend has given you a secret message nested inside a block of text. She provided you the key to her code as a number and now you must decode the message.

// The number, in binary, represents on/off flags for each word of the phrase. The bit order, overlayed on the array of words, will give which words to include in the phrase.

// Example:
// bittyWords('Long live the king', 11)
// Convert to binary: 11 = 0b1011
// Apply binary to words list:
// ['Long', 'live', 'the', 'king']
//     1       0      1       1
// result: 'Long the king'
// If the number does not have enough bits for the words array, left pad the number with 0s.

// Example:

// bittyWords('So long and thanks for all the fish', 42) === 'and for the'
// 42 is 0b101010 which is only 6 words, but the phrase has 8 words. The left two words are 0s and not included in the output.

// To uncomplicate things, there will be no punctuation in the phrases.

// Topics: Strings, Binary, Algorithms, Ciphers, Cryptography

function bittyWords(words, bits) {
    const phrase = words.split(' '),
          binary = bits.toString(2).padStart(phrase.length, '0'),
          result = phrase.filter((phr, idx) => binary[idx] === '1');
    return result.join(' ');
}