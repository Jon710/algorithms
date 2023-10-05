/**
 * @param {string} path
 * @return {boolean}
 */
var isPathCrossing = function (path) {
  const set = new Set();

  let x = 0;
  let y = 0;

  set.add(`${x}, ${y}`);

  for (let i = 0; i < path.length; i++) {
    if (path[i] === "N") x++;
    if (path[i] === "S") x--;
    if (path[i] === "E") y--;
    if (path[i] === "W") y++;

    if (set.has(`${x}, ${y}`)) return true;

    set.add(`${x}, ${y}`);
  }

  return false;
};
