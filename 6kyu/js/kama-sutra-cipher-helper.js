// Description:
// ###Definition of Kama: love, pleasure and sensual gratification

// The Kama Sutra cipher, also known as the Vatsyayana cipher is a classical monoalphabetic cipher with the property of being symmetric (Note: the Wikipedia entry is inaccurate about the origins of the cipher as of 2014-06-17). It is one of the earliest known substitution ciphers and is believed to predate the Caesar cipher. Its different names correspond to the book that led to its recognition, the Kama Sutra, and the author of that book, Vātsyāyana. The book is considered to be the standard on human sexual behavior in Sanskrit literature.

// In the Hindu traditions, Kama, the subject of this book, is one of the four goals of human life (the others being Dharma, Artha and Moksha). Contrary to popular beliefs about this book, the Kama Sutra is not exclusively about sex. It relates to all manners of human pleasure.

// The Kama Sutra recommends 64 pursuits for women, amongst many other things is mlecchita-vikalpa, or the art of secret writing, number 44 on the list. Different writers have provided commentary on the Kama Sutra and proposed different cipher techniques. One method described, Muladeviya, pairs different letters of the alphabet and uses reciprocal ones, with letters remaining unchanged. E.g. if the letters a and b are paired, a replaces b in the plaintext, and b replaces a in the plaintext.

// There are other types of ciphers based on the Kama Sutra, some of which are based on phonetic relationships (e.g. Kautiliyam, in which vowels become consonants). However, this kata will focus on Muladeviya. An interesting face about this cipher: it provides a set of all symmetric monoalphabetic substitution ciphers in which the input alphabet is the same as the output alphabet.

// An example using the Latin lowercase alphabet:

// d|n|a|f|h|l|m|x|e|r|k|u|t
// p|o|w|c|s|v|j|b|z|i|y|q|g
// "mutt" becomes "jqgg"
// "panda" becomes "dwopw"
// Kata specifications:

// The value of key is an array of pairs of characters in which all letters are unique.
// The resulting object should support methods encode and decode using the earlier described Kama Sutra cipher algorithm.
// Any character not represented in the key should be left in situ (case sensitive).

// Topics: Ciphers, Security, Object-oriented Programming, Strings, Algorithms

class KamaSutraCipher {
    constructor(key) {
      this.key = key;
      this.mapping = this.createMapping(key);
    }
    
    createMapping(key) {
      const mapping = {};
      key.forEach(([a, b]) => {
        mapping[a] = b;
        mapping[b] = a;
      });
      return mapping;
    }
    
    encode(str) {
      return str.split('').map(char => {
        if (this.mapping[char]) return this.mapping[char];
        return char;
      }).join('');
    }
    
    decode(str) {
      return this.encode(str);
    }
}