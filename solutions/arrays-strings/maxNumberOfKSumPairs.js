// var maxOperations = function (nums, k) {
//   let [ans, start, end] = [0, 0, nums.length - 1];

//   nums.sort((a, b) => a - b);

//   while (start < end) {
//     if (nums[start] + nums[end] === k) {
//       ans++;
//       start++;
//       end--;
//     } else if (nums[start] + nums[end] < k) {
//       start++;
//     } else {
//       end--;
//     }
//   }

//   return ans;
// };

var maxOperations = function(nums, k) {
    const map = new Map();
    let ans = 0;

    for (let i = 0; i < nums.length; i++) {
        const diff = k - nums[i];

        if (!map.has(diff)) {
            map.set(nums[i], (map.get(nums[i]) || 0) + 1);
            continue;
        }

        map.set(diff, map.get(diff) - 1);

        if (!map.get(diff)) map.delete(diff);

        ans++;
    }

    return ans;
};

console.log(maxOperations([1, 2, 3, 4], 5)); // 2
console.log(maxOperations([3, 1, 3, 4, 3], 6)); // 1
