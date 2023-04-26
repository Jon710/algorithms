// array-based stack
class StackArray {
  constructor() {
    this.items = [];
  }

  push(item) {
    return this.items.push(item);
  }

  pop() {
    return this.items.pop();
  }

  peek() {
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }

  size() {
    return this.items.length;
  }
}

const stack = new StackArray();

console.log(stack.push(15));
console.log(stack.push(20));
console.log(stack.push(35));
console.log(stack.pop());
console.log(stack.size());
