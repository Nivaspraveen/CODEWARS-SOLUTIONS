// Description:
// Create a function that takes a positive integer and returns the next bigger number that can be formed by rearranging its digits. For example:

//   12 ==> 21
//  513 ==> 531
// 2017 ==> 2071
// If the digits can't be rearranged to form a bigger number, return -1 (or nil in Swift, None in Rust):

//   9 ==> -1
// 111 ==> -1
// 531 ==> -1

function nextBigger(n){
    const digits = n.toString().split('').map(Number);
    const len = digits.length;
    
    let pivot = -1;
    for (let i = len - 2; i >= 0; i--) {
      if (digits[i] < digits[i + 1]) {
        pivot = i;
        break;
      }
    }
    if (pivot === -1) return -1;
    
    let successor = -1;
    for (let i = len - 1; i > pivot; i--) {
      if (digits[i] > digits[pivot]) {
        successor = i;
        break;
      }
    }
    [digits[pivot], digits[successor]] = [digits[successor], digits[pivot]];
    
    const suffix = digits.splice(pivot + 1).reverse();
    const resArr = digits.concat(suffix);
    
    const res = parseInt(resArr.join(''), 10);
    return res;
}