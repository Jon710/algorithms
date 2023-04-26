class MyStack {
  constructor() {
    this.queue1 = [];
    this.queue2 = [];
  }

  push(x) {
    return this.queue1.push(x);
  }

  pop() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let number = this.queue1.shift();
    this.queue1 = this.queue2;
    this.queue2 = [];
    return number;
  }

  top() {
    while (this.queue1.length > 1) {
      this.queue2.push(this.queue1.shift());
    }
    let val = this.queue1.shift();
    this.queue2.push(val);
    this.queue1 = this.queue2;
    this.queue2 = [];
    return val;
  }

  empty() {
    return this.queue1.length === 0;
  }
}
