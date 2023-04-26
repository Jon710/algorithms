// lc 415

const addStrings = (num1, num2) => {
  let i = num1.length - 1;
  let j = num2.length - 1;
  let sum = 0;
  let carry = 0;
  let result = "";

  while (i >= 0 || j >= 0 || carry != 0) {
    let ival = i >= 0 ? +num1[i] : 0; // used ternary operation if value not present on index
    let jval = j >= 0 ? +num2[j] : 0;

    i--;
    j--;

    sum = ival + jval + carry;
    result = `${sum % 10}${result}`;
    carry = Math.floor(sum / 10);
  }
  return result;
};
