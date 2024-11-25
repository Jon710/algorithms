/**
 * @param {number[]} cards
 * @return {number}
 */
// var minimumCardPickup = function (cards) {
//   const set = new Set();
//   let start = 0;
//   let minDistance = Infinity;

//   for (let end = 0; end < cards.length; end++) {
//     const currentCard = cards[end];

//     if (set.has(currentCard)) {
//       // Find and update the minimum distance
//       while (cards[start] !== currentCard) {
//         set.delete(cards[start]);
//         start++;
//       }

//       minDistance = Math.min(minDistance, end - start + 1);
//       start++; // Move start to the next position after the duplicate
//     }

//     set.add(currentCard);
//   }

//   return minDistance === Infinity ? -1 : minDistance;
// };

var minimumCardPickup = function(cards) {
    const map = new Map();
    let min = Infinity;

    for (let i = 0; i < cards.length; i++) {
        const currentCard = cards[i];

        if (map.has(currentCard)) {
            min = Math.min(min, i - map.get(currentCard) + 1)
        }

        map.set(currentCard, i)
    }

    return min === Infinity ? -1 : min;
};

console.log(minimumCardPickup([9, 4, 2, 3, 4, 7])); // 7
