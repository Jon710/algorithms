let numbers = [1, 15, 100];

// unshift() does the same.
Array.prototype.insertFirstPosition = function (value) {
  for (let i = this.length; i >= 0; i--) {
    this[i] = this[i - 1];
  }
  this[0] = value;
};

numbers.insertFirstPosition(0);

console.log(numbers);
