class WordDistance {
  constructor(words) {
    this.map = new Map();

    for (let i = 0; i < words.length; i++) {
      if (!this.map.has(words[i])) this.map.set(words[i], new Set());

      this.map.get(words[i]).add(i);
    }
  }

  shortest(word1, word2) {
    const map1 = this.map.get(word1);
    const map2 = this.map.get(word2);
    let min = Infinity;

    for (let m1 of map1) {
      for (let m2 of map2) {
        min = Math.min(Math.abs(m1 - m2), min);
      }
    }

    return min;
  }
}
