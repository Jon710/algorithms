var reversePrefix = function (word, ch) {
  const array = word.split(""); // we make an array because the string is immutable

  for (let i = 0; i < array.length; i++) {
    if (array[i] === ch) {
      let start = 0;
      let end = i;

      while (start < end) {
        const temp = array[end];
        array[end] = array[start];
        array[start] = temp;
        start++;
        end--;
      }

      return array.join("");
    }
  }

  return word;
};
