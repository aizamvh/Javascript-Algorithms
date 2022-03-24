class ArrayList {
  constructor() {
    this.length = 0;
    this.items = {};
  }

  push(value) {
    this.items[this.length] = value;
    this.length++;
  }

  pop() {
    let deletedItem = this.items[this.length - 1];
    delete this.items[this.length];
    this.length--;
    return deletedItem;
  }

  get(i) {
    return this.items[i];
  }

  delete(i) {
    for (let index = i; index < this.length; index++) {
      this.items[index] = this.items[index + 1];
    }
    delete this.items[this.length - 1];
    this.length--;
  }

  view() {
    return this.items;
  }
}
