// Description:
// Intro
// Hi there! You have to implement a function that takes a hex-color string and returns the string represents the complementary color.

// http://www.w3schools.com/colors/img_colormap.gif

// What is the hex-color? You can find the answer on w3schools and Wikipedia

// Input
// This function takes only one argument - a hexadecimal string (case-ignored with chars 0..9 or A..F) without hash-char "#". If the string is shorter than 6 characters, pad it with zeroes from the left to make it 6 characters long.

// "a23" <=> "000a23"
// "" <=> "0" <=> "000000"
// Output
// Your function output should be an uppercased string containing a hash character (#) followed by the complementary color. Complementary color is some color that gives completely white color in sum with the entered one: #000A23 + #FFF5DC = #FFFFFF

// Errors
// If the entered argument is incorrect: string length is 7+, has non-hexadecimal characters or non-string type, then an Error should be raised/thrown (throw an IllegalArgumentException in Java) or Nothing should be returned in Haskell.

// "00fffff" --> Incorrect string length
// "00ffZZ"  --> Non-hex chars
//  112233   --> Incorrect type (not a string)
// Examples
//    Input        Output
// ------------------------
//  "01fD08" --> "#FE02F7"
//     "a23" --> "#FFF5DC"
//        "" --> "#FFFFFF"

function getReversedColor(hexColor) {
    if (typeof hexColor !== 'string') hexColor = hexColor(string);
    hexColor = hexColor.trim().toLowerCase();
    if (hexColor.length < 6) hexColor = hexColor.padStart(6, '0');
    if (hexColor.length !== 6 || !/^[0-9a-f]{6}$/.test(hexColor)) throw new Error('Invalid hex color format');
    let r = 255 - parseInt(hexColor.slice(0, 2), 16), 
        g = 255 - parseInt(hexColor.slice(2, 4), 16),
        b = 255 - parseInt(hexColor.slice(4, 6), 16);
    return `#${r.toString(16).padStart(2, '0').toUpperCase()}${g.toString(16).padStart(2, '0').toUpperCase()}${b.toString(16).padStart(2, '0').toUpperCase()}`;
}