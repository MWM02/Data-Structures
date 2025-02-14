class Stack {
  constructor(maxSize = 5) {
    this.maxSize = maxSize;
    this.quantity = 0;
    this.collection = {};
  }

  push(item) {
    if (this.quantity < this.maxSize) {
      this.collection[this.quantity] = item;
      this.quantity++;
    } else {
      return "The stack is full.";
    }
  }

  pop() {
    if (this.quantity !== 0) {
      const popVal = this.collection[this.quantity - 1];
      delete this.collection[this.quantity - 1];
      this.quantity--;
      return popVal;
    } else {
      return "The stack is empty.";
    }
  }

  peek() {
    return this.collection[this.quantity - 1];
  }

  isEmpty() {
    return this.quantity === 0;
  }

  isFull() {
    return this.quantity === this.maxSize;
  }
}

module.exports = Stack;
