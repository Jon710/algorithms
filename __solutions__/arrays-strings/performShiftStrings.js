const stringShift = (s, shift) => {
  const chars = s.split("");

  for (let [direction, amount] of shift) {
    if (direction === 0) {
      while (amount !== 0) {
        const firstChar = chars.shift();
        chars.push(firstChar);
        amount--;
      }
    } else {
      while (amount !== 0) {
        const lastChar = chars.pop();
        chars.unshift(lastChar);
        amount--;
      }
    }
  }

  return chars.join("");
};
