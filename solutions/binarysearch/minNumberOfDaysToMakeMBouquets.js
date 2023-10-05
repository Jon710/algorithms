/**
 * @param {number[]} bloomDay
 * @param {number} m
 * @param {number} k
 * @return {number}
 */
 // i wanna make m bouquets. to make one, i need k ADJACENT FLOWERS
 // the ith flower blooms in bloomDay[i]. then i can use it in ONE bouquet.
 // i need the min number of days i need to wait to make m bouquets
 var minDays = function(bloomDay, m, k) {
  if (m * k > bloomDay.length) return -1;

  let low = Math.min(...bloomDay), high = Math.max(...bloomDay);
  // let ans = Infinity;

  while (low <= high) {
      const mid = Math.floor(low + (high - low) / 2);

      if (canMakeBouquet(bloomDay, mid, m, k)) {
          // ans = mid;
          high = mid - 1;
      } else {
          low = mid + 1;
      }
  }

  return low; // i can return low because of opposite polarity concept (striver explained) or ans

  function canMakeBouquet(arr, day, m, k) {
      let count = 0, numOfBouquets = 0;

      for (let i = 0; i < arr.length; i++) {
          if (arr[i] <= day) {
              count++;
          } else {
              numOfBouquets += Math.floor(count / k);
              count = 0;
          }
      }

      numOfBouquets += Math.floor(count / k);

      return numOfBouquets >= m;
  }
};