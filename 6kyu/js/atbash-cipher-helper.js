// Description:
// The Atbash cipher is a simple substitution cipher originally known to be implemented using the Hebrew alphabet (אתבש, aleph-tav-beth-shin). The Atbash cipher is particularly well-known for its use in the Bible. It was in use as early as 500BC by scribes writing the Book of Jeremiah.

// In the Atbash cipher, the first letter of the alphabet is substituted with the last letter, the second letter with the second to last letter, and so on.

// For the Latin alphabet, this could be mapped as:

// A|B|C|D|E|F|G|H|I|J|K|L|M
// Z|Y|X|W|V|U|T|S|R|Q|P|O|N
// For the Hebrew alphabet:

// א|ב|ג|ד|ה|ו|ז|ח|ט|י|כ
// ת|ש|ר|ק|צ|פ|ע|ס|נ|מ|ל
// When viewing Hebrew text:

// This is about viewing the text and should have no impact on your code. It may, however, help you with debugging text.
// I assume that your computer will display the characters properly.
// Hebrew is written right-to-left, such that: "א|ב".charAt(0) == "א".
// There are alternate forms of some letters in Hebrew (e.g. final forms) that aren't listed here. You won't need to worry about them for this Kata.
// Your solution should support any alphabet provided to the constructor, and should leave characters that are not in the specified alphabet in situ (e.g. uppercase letters should be left as-is if provided an alphabet of only lowercase letters).

// Topics: Algorithms, Ciphers, Security, Object-oriented Programming, Strings

class AtbashCipher {
    constructor(alphabet) {
      this.alphabet = alphabet;
      this.mapping = this.createMapping(alphabet);
    }
    
    createMapping(alphabet) {
      const map = {};
      for (let i = 0; i < alphabet.length; i++) map[alphabet[i]] = alphabet[alphabet.length - 1 - i];
      return map;
    }
    
    process(text) {
      return text.split('').map(char => {
        if (this.mapping[char]) return this.mapping[char];
        return char;
      }).join('');
    }
    
    encode(text) {
      return this.process(text);
    }
    
    decode(text) {
      return this.process(text);
    }
}