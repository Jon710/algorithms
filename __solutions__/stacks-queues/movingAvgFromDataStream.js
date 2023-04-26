class MovingAverage {
  constructor(size) {
    this.size = size;
    this.queue = [];
    this.sum = 0;
  }

  next(value) {
    if (this.queue.length === this.size) {
      this.sum -= this.queue.shift();
    }

    this.queue.push(value);
    this.sum += value;

    return this.sum / this.queue.length;
  }
}
