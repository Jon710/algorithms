/**
 * @param {string} dominoes
 * @return {string}
 */
var pushDominoes = function (dominoes) {
  dominoes = dominoes.split("");
  const queue = [];

  for (let i = 0; i < dominoes.length; i++) {
    if (dominoes[i] !== ".") queue.push(i);
  }

  while (queue.length) {
    const i = queue.shift();

    if (dominoes[i] === "L") {
      if (i > 0 && dominoes[i - 1] === ".") {
        dominoes[i - 1] = "L";
        queue.push(i - 1);
      }
    } else {
      if (i + 1 < dominoes.length) {
        if (dominoes[i + 1] === ".") {
          if (dominoes[i + 2] === "L") {
            queue.shift();
          } else {
            dominoes[i + 1] = "R";
            queue.push(i + 1);
          }
        }
      }
    }
  }

  return dominoes.join("");
};
