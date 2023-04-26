// implementing stacks with linked lists is more efficient, because we are only moving pointers around. there are no loops
class StackNode {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class StackLinkedList {
  constructor() {
    this.top = null;
    this.size = 0;
  }

  push(val) {
    if (this.size === 0) {
      this.top = new StackNode(val);
    } else {
      const newNode = new StackNode(val);
      newNode.next = this.top;
      this.top = newNode;
    }

    this.size++;
  }

  pop() {
    if (this.size === 0) return null;
    const node = this.top;
    this.top = this.top.next;
    this.size--;
    return node.val;
  }

  peek() {
    return this.top.val;
  }
}

const stack = new StackLinkedList();
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.pop());
console.log(stack.size);
