// Description:
// This is the first part. You can solve the second part here when you are done with this. Multiply two numbers! Simple!

// The arguments are passed as strings.
// The numbers may be way very large
// Answer should be returned as a string
// The returned "number" should not start with zeros e.g. 0123 is invalid
// Note: 100 randomly generated tests!

// Usage of BigInt is disallowed and will be checked in the full test suite.

function multiply(a, b){
    if (a === '0' || b === '0') return '0';
    
    const res = new Array(a.length + b.length).fill(0);
    const n1 = a.split('').reverse();
    const n2 = b.split('').reverse();
    
    for (let i = 0; i < n1.length; i++) {
      for (let j = 0; j < n2.length; j++) {
        const d1 = parseInt(n1[i], 10);
        const d2 = parseInt(n2[j], 10);
        const product = d1 * d2;
        res[i + j] += product;
        
        if (res[i + j] >= 10) {
          res[i + j + 1] += Math.floor(res[i + j] / 10);
          res[i + j] %= 10;
        }
      }
    }
    while (res[res.length - 1] === 0) res.pop();
    res.reverse();
    return res.join('');
}