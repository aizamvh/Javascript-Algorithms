const { BinaryTreeNode, BinaryTree, exampleTree } = require("../data-structures/binary-tree");

/**
 * @param {BinaryTreeNode} root
 */
const branchSums = (root) => {
  // we pass this down into the calcBranchSums function we can think of it as a bucket that calcBranchSums will fill
  let sums = []
  if (root === null) return

  calculateBranchSums(root, 0, sums)
}

/**
 * @param {BinaryTreeNode} node - binary tree node
 * @param {number[]} sums - an array that will hold branchSums results
 * @param {number} branchSum - current branch total sum
 */
const calculateBranchSums = (node, branchSum, sums) => {
  /* as a sideEffect of this function being recursive(it calls itself), it's also called on empty nodes 
    we add this condition to prevent running further operations on empty nodes
  */
  if(node === null) return;

  const newBranchSum = branchSum + node.value;
  // sums(an array) is a pointer to an object (reference) whenever we hit a node that has no children we add the branchSums to it
  if(node.right === null && node.left == null) {
    sums.push(newBranchSum)
    return;
  }

  // there's a right or left node (one of them can be null)
  // we pass branchSums variable further down the tree to accumulate remaining node values untill it hits an empty node
  calculateBranchSums(node.right, newBranchSum, sums)
  calculateBranchSums(node.left, newBranchSum, sums)
}

// test
const tree = exampleTree;
const result = branchSums(tree)
console.log(result);
