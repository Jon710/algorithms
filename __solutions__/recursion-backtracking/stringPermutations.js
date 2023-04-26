function permute(str) {
  if (!str) return;

  if (!!str.length && str.length < 2) return [str];

  const permutations = [];

  for (let i = 0; i < str.length; i++) {
    let char = str[i];

    if (str.indexOf(char) !== i) continue;

    let remainder = str.slice(0, i) + str.slice(i + 1, str.length);

    for (let permutation of permute(remainder)) {
      permutations.push(char + permutation);
    }
  }

  return permutations;
}

// no dups
function permute2(letters) {
  const results = [];
  const set = new Set();

  function backtrack(result) {
    if (result.length === letters.length) {
      results.push(result.join(""));
      return;
    }

    for (let i = 0; i < letters.length; i++) {
      if (set.has(letters[i])) continue;

      result.push(letters[i]);
      set.add(letters[i]);
      backtrack(result);
      result.pop();
      set.delete(letters[i]);
    }
  }

  backtrack([]);
  return results;
}

console.log(permute("abc"));
console.log(permute2("abc"));
