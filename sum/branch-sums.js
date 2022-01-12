const { BinaryTreeNode, BinaryTree, exampleTree } = require("../data-structures/binary-tree");

const branchSums = (root) => {
  let sums = []
  if (root === null) return

  calculateBranchSums(root, 0, sums)
}

const calculateBranchSums = (node, branchSum, sums) => {

  if(node === null) return;

  const newBranchSum = branchSum + node.value;
  if(node.right === null && node.left == null) {
    sums.push(newBranchSum)
    return;
  }

  calculateBranchSums(node.right, newBranchSum, sums)
  calculateBranchSums(node.left, newBranchSum, sums)
}

const tree = exampleTree;
const result = branchSums(tree)
console.log(result);
