class Queue {
  constructor(maxSize) {
    this.maxSize = maxSize;
    this.collection = {};
    this.front = 0;
    this.back = 0;
  }

  enQueue(item) {
    if (this.back < this.maxSize) {
      this.collection[this.back++] = item;
    }
  }

  deQueue() {
    if (this.front !== this.back) {
      delete this.collection[this.front++];
    } else {
      console.log("Queue is empty.");
    }
  }

  getQuantity() {
    return this.back - this.front;
  }

  isEmpty() {
    return this.getQuantity() === 0;
  }

  isFull() {
    return this.getQuantity() === this.maxSize;
  }
}

module.exports = Queue;
