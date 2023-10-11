function maximumRemovals(s, p, removable) {
  let l = 0,
    r = removable.length - 1;

  while (l <= r) {
    const mid = Math.floor(l + (r - l) / 2);
    const removed = new Set(removable.slice(0, mid + 1));

    if (isSubsequence(removed, s, p)) {
      l = mid + 1;
    } else {
      r = mid - 1;
    }
  }

  return l;
}

function isSubsequence(removed, s, p) {
  let pp = 0;

  for (let i = 0; i < s.length; i++) {
    if (s[i] === p[pp] && !removed.has(i)) {
      pp++;
    }

    if (pp === p.length) return true;
  }

  return false;
}

console.log(maximumRemovals("abcacb", "ab", [3, 1, 0]));
