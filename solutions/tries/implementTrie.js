//https://www.youtube.com/watch?v=9UZZ0i33h64
// when inserting a word, we look at each level. i.e: if it's greek, the 2 e's go on different levels
// time complexity of a trie is O(N*W), where N is the number of nodes in the trie and W is the length of the word
// lc 1065
class Node {
  constructor() {
    this.children = new Map();
    this.isWord = false;
  }
}

class Trie {
  constructor() {
    this.root = new Node();
  }

  insert(word) {
    let currentNode = this.root;

    // go over each letter in word
    for (let letter of word) {
      // check if letter exists in children
      if (!currentNode.children.has(letter)) {
        currentNode.children.set(letter, new Node());
      }

      // proceed to the next level (depth) of trie
      currentNode = currentNode.children.get(letter);
    }

    currentNode.isWord = true;
  }

  search(word) {
    if (!word.length) return false;

    let currentNode = this.root;

    for (let letter of word) {
      if (!currentNode.children.has(letter)) return false;
      // go to next level
      currentNode = currentNode.children.get(letter);
    }

    return currentNode.isWord;
  }

  startsWith(prefix) {
    if (!prefix.length) return false;

    let currentNode = this.root;

    for (let letter of prefix) {
      if (!currentNode.children.has(letter)) return false;
      // go to next level
      currentNode = currentNode.children.get(letter);
    }

    return true;
  }
}

const trie = new Trie();

trie.insert("joao");

// console.log(trie.root.children.get('j').children);
console.log(trie.startsWith('jo'))
