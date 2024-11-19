// Description:
// There is a secret string which is unknown to you. Given a collection of random triplets from the string, recover the original string.

// A triplet here is defined as a sequence of three letters such that each letter occurs somewhere before the next in the given string. "whi" is a triplet for the string "whatisup".

// As a simplification, you may assume that no letter occurs more than once in the secret string.

// You can assume nothing about the triplets given to you other than that they are valid triplets and that they contain sufficient information to deduce the original string. In particular, this means that the secret string will never contain letters that do not occur in one of the triplets given to you.

var recoverSecret = function(triplets) {
    const uniqueChars = new Set();
    for (const [a, b, c] of triplets) {
      uniqueChars.add(a);
      uniqueChars.add(b);
      uniqueChars.add(c);
    }
    const graph = new Map();
    const inDegree = new Map();
    
    for (const char of uniqueChars) {
      graph.set(char, []);
      inDegree.set(char, 0);
    }
    for (const [a, b, c] of triplets) {
      if (!graph.get(a).includes(b)) {
        graph.get(a).push(b);
        inDegree.set(b, inDegree.get(b) + 1);
      }
      if (!graph.get(b).includes(c)) {
        graph.get(b).push(c);
        inDegree.set(c, inDegree.get(c) + 1);
      }
    }
    const queue = [];
    const result = [];
    
    for (const [char, degree] of inDegree.entries()) {
      if (degree === 0) queue.push(char);
    }
    while (queue.length > 0) {
      const current = queue.shift();
      result.push(current);
      
      for (const neighbor of graph.get(current)) {
        inDegree.set(neighbor, inDegree.get(neighbor) - 1);
        if (inDegree.get(neighbor) === 0) queue.push(neighbor);
      }
    }
    return result.join('');
}