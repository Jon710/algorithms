/**
 * @param {string[]} products
 * @param {string} searchWord
 * @return {string[][]}
 */
// function suggestedProducts(products, searchWord) {
//     products.sort();

//     const ans = [];

//     for (let i = 0; i < searchWord.length; i++) {
//         const search = searchWord.slice(0, i + 1);
//         const found = products.filter(w => w.slice(0, i + 1) === search);
//         ans.push(found.slice(0, 3));
//     }

//     return ans;
// }

function suggestedProducts(products, searchWord) {
  products.sort();

  let ans = [],
    left = 0;
  right = products.length - 1;

  for (let i = 0; i < searchWord.length; i++) {
    const matches = [];
    let currChar = searchWord.charAt(i);

    while (left < products.length && products[left].charAt(i) < currChar)
      left++;

    while (right >= 0 && products[right].charAt(i) > currChar) right--;

    for (let j = left; j <= right && matches.length < 3; j++) {
      matches.push(products[j]);
    }

    ans.push(matches);
  }

  return ans;
}

console.log(
  suggestedProducts(
    ["mobile", "mouse", "moneypot", "monitor", "mousepad"],
    "mouse"
  )
);
