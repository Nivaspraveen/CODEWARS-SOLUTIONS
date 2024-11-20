// Description:
// Given an array of positive integers, replace every element with the least greater element to its right. If there is no greater element to its right, replace it with -1. For instance, given the array

// [8, 58, 71, 18, 31, 32, 63, 92, 43, 3, 91, 93, 25, 80, 28],

// the desired output is

// [18, 63, 80, 25, 32, 43, 80, 93, 80, 25, 93, -1, 28, -1, -1].

// Your task is to create a function "arrayManip()" that takes in an array as its argument, manipulates the array as described above, then return the resulting array.

// Note: Return a new array, rather than modifying the passed array.

// Arrays, Binary Search Trees, Algorithms

function arrayManip(array){
    // Function to perform binary search to find the least greater element
    const binarySearch = (array, target) => {
      let left = 0, right = array.length;
      while (left < right) {
        const mid = Math.floor((left + right) / 2);
        (array[mid] <= target) ? (left = mid + 1) : (right = mid);
      }
      return left;
    }
    
    const result = new Array(array.length).fill(-1), sortedArr = [];
    for (let i = array.length - 1; i >= 0; i--) {
      const idx = binarySearch(sortedArr, array[i]);
      if (idx < sortedArr.length) result[i] = sortedArr[idx];
      sortedArr.splice(idx, 0, array[i]);
    }
    return result;
  }