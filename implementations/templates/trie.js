class Node {
  constructor(value) {
    this.value = value;
    this.children = new Map();
  }

  insert(s, idx) {
    // idx: index of the current character in s
    if (idx !== s.length) {
      if (this.children.has(s.charAt(idx))) {
        this.children.get(s.charAt(idx)).insert(s, idx + 1);
      } else {
        this.children.set(s.charAt(idx), new Node(s.charAt(idx)));
        this.children.get(s.charAt(idx)).insert(s, idx + 1);
      }
    }
  }
}
