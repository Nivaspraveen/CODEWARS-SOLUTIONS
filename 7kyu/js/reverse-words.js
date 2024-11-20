// Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

function reverseWords(str) {
    const w = str.split(/(\s+)/);
    for (let i = 0; i < w.length; i++) {
      if (w[i].trim()) w[i] = w[i].split('').reverse().join('');
    }
    return w.join('');
}