const equal = (a, b) => {
  return this.compare(a, b) === 0;
}


class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {

  constructor() {
    /** @var LinkedListNode */

    this.head = null;
    this.tail = null;
  }

  /**
   * @param {any} value
   * @returns {LinkedListNode}
   */
  append(value) {
    const newNode = new LinkedListNode(value);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    }

    this.tail.next = newNode;
    this.tail = newNode;

    return this;
  }

  find(value = undefined) {

    if (!this.head) {
      return null;
    }

    let currentNode = this.head; // save current head

    while (currentNode.next) {

      if (value !== undefined && equal(currentNode.value, value)) {
        return currentNode;
      }

      currentNode = currentNode.next;

    }

    return null;
  }

  delete(value) {

    if (!this.head) {
      return null;
    }

    let deletedNode = null;

    while (this.head && equal(this.head.value, value)) {
      deletedNode = this.head;
      this.head = this.head.next;
    }

    let currentNode = this.head;

    if (currentNode !== null) {
      while (currentNode.next) {
        if (equal(currentNode.next, value)) {
          deletedNode = currentNode.next;
          currentNode.next = currentNode.next.next;
        } else {
          currentNode = currentNode.next;
        }
      }
    }

    if(equal(this.tail.value, value)) {
      this.tail = currentNode;
    }

    return deletedNode;
  }

  

  reverse() {

  }

}

const linkedList = new LinkedList()
const value = linkedList.append('value')
