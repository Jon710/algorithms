// doubly linked list
class Node {
  constructor(val) {
    this.next = null;
    this.previous = null;
    this.val = val;
  }
}

class BrowserHistory {
  constructor(homepage) {
    this.current = new Node(homepage);
  }

  visit(url) {
    let node = new Node(url);
    this.current.next = node;
    node.previous = this.current;
    this.current = node;
  }

  back(steps) {
    for (let i = 0; i < steps; i++) {
      if (!this.current.previous) return this.current.val;
      this.current = this.current.previous;
    }

    return this.current.val;
  }

  forward(steps) {
    for (let i = 0; i < steps; i++) {
      if (!this.current.next) return this.current.val;
      this.current = this.current.next;
    }

    return this.current.val;
  }
}
