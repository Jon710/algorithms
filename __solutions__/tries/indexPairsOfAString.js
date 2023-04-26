//https://www.youtube.com/watch?v=9UZZ0i33h64
// when inserting a word, we look at each level. i.e: if it's greek, the 2 e's go on different levels
// time complexity of a trie is O(N*W), where N is the number of nodes in the trie and W is the length of the word
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
}

var indexPairs = function (text, words) {
  const output = [];

  let trie = new Trie();
  for (let word of words) trie.insert(word);

  //iterate through text
  for (let i = 0; i < text.length; i++) {
    //get the root from the trie
    let node = trie.root;

    //inner loop where j is i and iterate through the text.length
    for (let j = i; j < text.length; j++) {
      //get the map of the current letter in the text
      node = node.children.get(text[j]);

      if (!node) break;

      if (node.isWord) output.push([i, j]);
    }
  }

  return output;
};
