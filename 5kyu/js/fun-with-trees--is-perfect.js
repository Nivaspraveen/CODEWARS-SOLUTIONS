// INSTRUCTIONS:
// A perfect binary tree is a binary tree in which all interior nodes have two children and all leaves have the same depth or same level.

// You are given a class called TreeNode. Implement the method isPerfect which determines if a given tree denoted by its root node is perfect.

// Note: TreeNode class contains helper methods for tree creation, which might be handy for your solution. Feel free to update those methods, but make sure you keep their signatures intact (since they are used from within test cases).

// You can (and should) add more tests to validate your solution, since not all cases are covered in the example test cases.

// TOPICS: Trees, Recursion, Binary Trees, Binary Search, Trees, Data Structures, Algorithms

class TreeNode {

    constructor(left = null, right = null) {
      this.left = left;
      this.right = right;
    }
  
    static isPerfect(root) {
      if (!root) return true;
      
      //Function to calculate the depth of the tree
      const calculateDepth = node => {
        let depth = 0;
        while (node) {
          depth++;
          node = node.left;
        }
        return depth;
      };
      
      // Recursive function to check if the tree is perfect
      const isPerfectRecursive = (node, level, depth) => {
        if (!node) return true;
        if (!node.left && !node.right) return level + 1 === depth;
        if (!node.left || !node.right) return false;
        return (isPerfectRecursive(node.left, level + 1, depth) && isPerfectRecursive(node.right, level + 1, depth));
      }
      
      const depth = calculateDepth(root);
      return isPerfectRecursive(root, 0, depth);
    }
    
    static leaf() {
      return new TreeNode();
    }
    
    static join(left, right) {
      return new TreeNode().withChildren(left, right);
    }
    
    withLeft(left) {
      this.left = left;
      return this;
    }
  
    withRight(right) {
      this.right = right;
      return this;
    }
  
    withChildren(left, right) {
      this.left = left;
      this.right = right;
      return this;
    }
  
    withLeftLeaf() {
      return this.withLeft(TreeNode.leaf());
    }
  
    withRightLeaf() {
      return this.withRight(TreeNode.leaf());
    }
  
    withLeaves() {
      return this.withChildren(TreeNode.leaf(), TreeNode.leaf());
    }
    
}