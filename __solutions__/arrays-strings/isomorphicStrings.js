const isIsomorphic = (s, t) => {
  const mapST = new Map();
  const mapTS = new Map();

  for (let i = 0; i < s.length; i++) {
    if (
      (mapST.has(s[i]) && mapST.get(s[i]) !== t[i]) ||
      (mapTS.has(t[i]) && mapTS.get(t[i]) !== s[i])
    ) {
      return false;
    }

    mapST.set(s[i], t[i]);
    mapTS.set(t[i], s[i]);
  }

  return true;
};
