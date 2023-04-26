class MyHashMap {
  constructor() {
    this.map = {};
  }

  get(key) {
    if (this.map[key] === undefined) return -1;

    return this.map[key];
  }

  put(key, value) {
    this.map[key] = value;
  }

  remove(key) {
    delete this.map[key];
  }
}

// LINKED LIST //
class ListNode {
  constructor(key = -1, val = -1, next = null) {
    this.key = key;
    this.val = val;
    this.next = next;
  }
}

class MyHashMap {
  constructor() {
    for (let i = 0; i < 1000; i++) {
      this.map = [new ListNode()];
    }
  }

  hash(key) {
    return key % this.map.length;
  }

  put(key, value) {
    let cur = this.map[this.hash(key)];

    while (cur.next) {
      if (cur.next.key === key) {
        cur.next.val = value;
        return;
      }

      cur = cur.next;
    }

    cur.next = new ListNode(key, value);
  }

  get(key) {
    let cur = this.map[this.hash(key)].next;

    while (cur) {
      if (cur.key === key) return cur.val;

      cur = cur.next;
    }

    return -1;
  }

  remove(key) {
    let cur = this.map[this.hash(key)];

    while (cur.next && cur.next.key !== key) {
      cur = cur.next;
    }

    if (cur && cur.next) cur.next = cur.next.next;
  }
}
