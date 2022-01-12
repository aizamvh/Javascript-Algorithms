
class BinaryTreeNode {
  /**
   * @param {BinaryTreeNode} right
   * @param {BinaryTreeNode} left
   */
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }

}

class BinaryTree {
  /**
   * @param {BinaryTreeNode} root
   */
  constructor() {
    this.root = null;
  }

  add(value) {
    if(this.root === null) {
      this.root = new BinaryTreeNode(value)
    } else {
      let current = this.root;
      while(true) {
        if(current.value > value) {
          //go left
          if(current.left) {
            current = current.left;
          }else {
            current.left = new BinaryTreeNode(value);
            break;
          }
        } else {
          //go right
          if(current.right) {
            current = current.right;
          }else {
            current.right = new BinaryTreeNode(value);
            break;
          }
        }
      }
    }
    return this;
  }

  toObject() {
    return this.root;
  }
}

const exampleTree = new BinaryTree()
exampleTree.add(5)
exampleTree.add(1)
exampleTree.add(8)
exampleTree.add(4)
exampleTree.add(3)
exampleTree.add(9)
const addedNode = exampleTree.add(2)

console.log(addedNode);


module.exports = {BinaryTree, BinaryTreeNode, exampleTree}