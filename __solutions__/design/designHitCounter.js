class HitCounter {
  constructor() {
    this.queue = [];
  }

  // number, return void
  hit(timestamp) {
    this.queue.push(timestamp);
  }

  // number, return number
  getHits(timestamp) {
    while (this.queue.length && timestamp - this.queue[0] >= 300) {
      this.queue.shift();
    }

    return this.queue.length;
  }
}

// what if data is not sorted and several hits have the same timestamp
// https://www.geeksforgeeks.org/design-a-hit-counter/
// class HitCounter {
//     constructor() {
//         this.times = new Array(300);
//         this.hits = new Array(300);
//     }

//     // number, return void
//     hit(timestamp) {
//         const idx = timestamp % 300;

//         if (this.times[idx] !== timestamp) {
//             this.times[idx] = timestamp;
//             this.hits[idx] = 1;
//         } else {
//             this.hits[idx]++;
//         }
//     }

//     // number, return number
//     getHits(timestamp) {
//         let ans = 0;

//         for (let i = 0; i < 300; i++) {
//             if (timestamp - this.times[i] < 300) {
//                 ans += this.hits[i];
//             }
//         }

//         return ans;
//     }
// };
