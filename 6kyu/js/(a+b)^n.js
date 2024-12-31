// Description:
// Similar but fairly harder version : Linked

// Create a function that takes a integer number n and returns the formula for 
// (a+b)^n as a string. (Input --> Output)

// 0  --> "1"
// 1  --> "a+b"
// 2  --> "a^2+2ab+b^2"
// -2 --> "1/(a^2+2ab+b^2)"
// 3  --> "a^3+3a^2b+3ab^2+b^3"
// 5  --> "a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5"
// The formula for n=5 is like so :

// a5+5a4b+10a3b2+10a2b3+5ab4+b5a 5 +5a4 b+10a 3 b 2 +10a 2 b 3 +5ab 4 +b 5
 
// So the answer would look like so : a^5+5a^4b+10a^3b^2+10a^2b^3+5ab^4+b^5

// Important notes :
// Your string may not have spaces so you can't do this : a^5 + 5a^4 b + 10a^3 b^2...
// You will show raised to power of by ^ and not using **.
// You need not put * between each multiplication
// There is no need to show a^1 or b^1 since that is basically a and b
// a^0 and/or b^0 also don't need be shown instead be a normal person and use 1 since that is what they equate to.
// You will need to handle both positive and negative numbers + 0
// Note :
// a^-n = 1/a^n
 
// You will not be tested for float (only negative integers and whole numbers)
// input n goes from -200 to 200.
// You will need to use BigInt since otherewise it will not work for both JS and Java

// Mathematics Algebra Strings

function formula(n) {
    const factorial = num => {
      let result = BigInt(1);
      for (let i = 2; i <= num; i++) result *= BigInt(i);
      return result;
    };
    
    const binCoeff = (n, k) => factorial(n) / (factorial(k) * factorial(n - k));
    
    const generateExpansion = n => {
      let terms = [];
      for (let k = 0; k <= n; k++) {
        let coeff = binCoeff(n, k), aPower = n - k, bPower = k, term = '';
        if (coeff > 1) term += coeff.toString();
        if (aPower > 0) term += 'a' + (aPower > 1 ? '^' + aPower : '');
        if (bPower > 0) term += 'b' + (bPower > 1 ? '^' + bPower : '');
        terms.push(term);
      }
      return terms.join('+');
    };
    
    if (n === 0) return '1';
    if (n === 1) return 'a+b';
    return n > 0 ? generateExpansion(n) : `1/(${generateExpansion(-n)})`;
}