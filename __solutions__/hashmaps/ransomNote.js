// lc 383
var canConstruct = function (ransomNote, magazine) {
  const map = new Map();

  for (let i = 0; i < magazine.length; i++) {
    map.set(magazine[i], (map.get(magazine[i]) || 0) + 1);
  }

  for (let i = 0; i < ransomNote.length; i++) {
    if (!map.has(ransomNote[i]) || map.get(ransomNote[i]) <= 0) {
      return false;
    }

    map.set(ransomNote[i], map.get(ransomNote[i]) - 1);
  }

  return true;
};
