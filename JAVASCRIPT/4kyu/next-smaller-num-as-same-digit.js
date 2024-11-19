// Description:
// Write a function that takes a positive integer and returns the next smaller positive integer containing the same digits.

// For example:

// nextSmaller(21) == 12
// nextSmaller(531) == 513
// nextSmaller(2071) == 2017
// Return -1 (for Haskell: return Nothing, for Rust: return None), when there is no smaller number that contains the same digits. Also return -1 when the next smaller number with the same digits would require the leading digit to be zero.

// nextSmaller(9) == -1
// nextSmaller(111) == -1
// nextSmaller(135) == -1
// nextSmaller(1027) == -1 // 0721 is out since we don't write numbers with leading zeros
// some tests will include very large numbers.
// test data only employs positive integers.
// The function you write for this challenge is the inverse of this kata: "Next bigger number with the same digits."

function nextSmaller(n) {
    const digits = n.toString().split('');
    let i = digits.length - 2;
    while (i >= 0 && digits[i] <= digits[i + 1]) i--; 
    if (i === -1) return -1;
    
    let j = digits.length - 1;
    while (digits[j] >= digits[i]) j--;
    [digits[i], digits[j]] = [digits[j], digits[i]];
    
    const right = digits.splice(i + 1).sort((a, b) => b - a);
    const resDig = [...digits, ...right];
    const res = parseInt(resDig.join(''), 10);
    if (resDig[0] === '0') return -1;
    
    return res;
}