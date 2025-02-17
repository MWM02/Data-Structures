class Node {
  constructor(data, nextNode = null) {
    this.data = data;
    this.nextNode = nextNode;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.size = 0;
  }

  add(data) {
    const newNode = new Node(data);
    if (this.head !== null) {
      let currNode = this.head;
      while (currNode.nextNode) {
        currNode = currNode.nextNode;
      }
      currNode.nextNode = newNode;
    } else {
      this.head = newNode;
    }
    this.size++;
  }

  addHead(data) {
    const newNode = new Node(data);
    newNode.nextNode = this.head;
    this.head = newNode;
    this.size++;
  }

  addAt(data, index) {
    if (index < 0 || index > this.size) {
      console.log("Invalid index");
    } else {
      const newNode = new Node(data);
      if (index === 0) {
        this.addHead(data);
      } else if (index === this.size) {
        this.add(data);
      } else {
        let count = 0;
        let currNode = this.head;
        while (count !== index - 1) {
          count++;
          currNode = currNode.nextNode;
        }
        newNode.nextNode = currNode.nextNode;
        currNode.nextNode = newNode;
        this.size++;
      }
    }
  }

  //methods
  //insert at head
  //insert at tail
  //insert at any node
  //delete at any node
  //print list
}
