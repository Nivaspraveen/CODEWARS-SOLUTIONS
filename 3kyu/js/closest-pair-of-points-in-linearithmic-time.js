// Instructions

// Given a number of points on a plane, your task is to find two points with the smallest distance between them in linearithmic O(n log n) time.

// Example
//   1  2  3  4  5  6  7  8  9
// 1  
// 2    . A
// 3                . D
// 4                   . F       
// 5             . C
// 6              
// 7                . E
// 8    . B
// 9                   . G
// For the plane above, the input will be:

// [
//   [2,2], // A
//   [2,8], // B
//   [5,5], // C
//   [6,3], // D
//   [6,7], // E
//   [7,4], // F
//   [7,9]  // G
// ]
// => closest pair is: [[6,3],[7,4]] or [[7,4],[6,3]]
// (both answers are valid)
// The two points that are closest to each other are D and F.
// Expected answer should be an array with both points in any order.

// Goal
// The goal is to come up with a function that can find two closest points for any arbitrary array of points, in a linearithmic time.

// Note: for compatibility reasons, your function will be called with one additional parameter, a distance calculation function. However you can completely ignore it, and you do not have to account for it - it's there only to keep compatibility with old solutions.

// Topics: Algorithms, Geometry, Mathematics

// Calculate a pair of closest points in linearithmic time
function closestPair(points) {
    const distance = (p1, p2) => Math.sqrt((p1[0] - p2[0]) ** 2 + (p1[1] - p2[1]) ** 2);
    points.sort((a, b) => a[0] - b[0]);
    
    const closestPairRecursive = points => {
      if (points.length <= 3) {
        let minDist = Infinity, closest = [];
        for (let i = 0; i < points.length; i++) {
          for (let j = i + 1; j < points.length; j++) {
            let dist = distance(points[i], points[j]);
            if (dist < minDist) {
              minDist = dist;
              closest = [points[i], points[j]];
            }
          }
        }
        return closest;
      }
      let mid = Math.floor(points.length / 2), 
          left = points.slice(0, mid), 
          right = points.slice(mid),
          closestLeft = closestPairRecursive(left),
          closestRight = closestPairRecursive(right),
          minDistLeft = distance(...closestLeft),
          minDistRight = distance(...closestRight),
          minDist = Math.min(minDistLeft, minDistRight),
          closest = minDistLeft < minDistRight ? closestLeft : closestRight,
          midX = points[mid][0],
          inStrip = points.filter(p => Math.abs(p[0] - midX) < minDist);
      inStrip.sort((a, b) => a[1] - b[1]);
      
      for (let i = 0; i < inStrip.length; i++) {
        for (let j = i + 1; j < inStrip.length && (inStrip[j][1] - inStrip[i][1]) < minDist; j++) {
          let dist = distance(inStrip[i], inStrip[j]);
          if (dist < minDist) {
            minDist = dist;
            closest = [inStrip[i], inStrip[j]];
          }
        }
      }
      return closest;
    };
    return closestPairRecursive(points);
}