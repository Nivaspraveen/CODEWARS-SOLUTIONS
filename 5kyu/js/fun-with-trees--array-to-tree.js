// Description:
// You are given an array of integers. Implement a function which creates a complete binary tree from the array (complete meaning that every level of the tree, except possibly the last, is completely filled).

// The elements of the array are to be taken left-to-right, and put into the tree top-to-bottom, left-to-right.

// For example, given the array [17, 0, -4, 3, 15] you should create the following tree:

//     17
//    /  \
//   0   -4
//  / \
// 3   15 
// A tree node type is preloaded for you:

// var TreeNode = function(value, left, right) {
//   this.value = value;
//   this.left = left;
//   this.right = right;
// };

// Trees, Arrays, Binary Trees, Data Structures, Algorithms

function arrayToTree(array) {
    if (array.length === 0) return undefined;
    const root = new TreeNode(array[0]), queue = [root];
    let i = 1;
    while (i < array.length) {
      const node = queue.shift();
      if (i < array.length) {
        node.left = new TreeNode(array[i]);
        queue.push(node.left);
        i++;
      }
      if (i < array.length) {
        node.right = new TreeNode(array[i]);
        queue.push(node.right);
        i++;
      }
    }
    return root;
};