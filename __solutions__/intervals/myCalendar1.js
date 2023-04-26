class MyCalendar {
  constructor() {
    this.calendar = [];
  }

  // O (Nˆ2)
  // book(start, end) {
  //     for (let i = 0; i < this.calendar.length; i++) {
  //         if (this.calendar[i][1] > start && this.calendar[i][0] < end) return false;
  //     }

  //     this.calendar.push([start, end]);
  //     return true;
  // }

  // O(Nlogn)
  book(start, end) {
    let left = 0;
    let right = this.calendar.length - 1;
    while (left <= right) {
      const mid = left + Math.floor((right - left) / 2);
      if (start < this.calendar[mid][1] && this.calendar[mid][0] < end)
        return false;

      if (this.calendar[mid][1] <= start) {
        left = mid + 1;
      } else {
        right = mid - 1;
      }
    }
    this.calendar.push([start, end]);
    this.calendar.sort((a, b) => a[0] - b[0] || a[1] - b[1]);
    return true;
  }
}
