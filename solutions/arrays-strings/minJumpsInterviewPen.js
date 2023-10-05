function minJumpsInterviewPen(arr) {
  let [jumps, curEnd, curFarthest] = [0, 0, 0];

  for (let i = 0; i < arr.length - 1; i++) {
    curFarthest = Math.max(curFarthest, i + arr[i]);

    if (i === curEnd) {
      jumps++;
      curEnd = curFarthest;
    }
  }

  return jumps;
}

console.log(minJumpsInterviewPen([4, 3, 4, 2, 6, 1, 2, 1]))
console.log(minJumpsInterviewPen([6, 1, 1, 1, 1, 1, 3]))
console.log(minJumpsInterviewPen([1, 1, 1, 1]))
console.log(minJumpsInterviewPen([2, 1]))
console.log(minJumpsInterviewPen([2, 3, 0, 1, 4]))