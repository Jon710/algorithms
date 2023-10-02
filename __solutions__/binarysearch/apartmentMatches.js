// interview pen yt
// PROBLEM: The goal of every applicant is to find an apartment within a threshold of size. k is a plus/minus val that represents the range of sizes that the applicant is willing to accept. Given a list of desired sizes and a list of available apartments, return the number of matches.
// desired = [60, 45, 80, 60] -> each person's desired size
// apartments = [30, 60, 75]
// k = 5
function totalMatches(desired, apartments, k) {
  let matches = 0;

  apartments.sort((a, b) => a - b);

  for (let i = 0; i < desired.length; i++) {
    if (binarySearch(apartments, 0, apartments.length - 1, desired[i], k))
      matches++;
  }

  return matches;
}

function binarySearch(apartments, start, end, desired, k) {
  while (start <= end) {
    const mid = Math.floor(start + (end - start) / 2);

    if (apartments[mid] >= desired - k && apartments[mid] <= desired + k) {
      return true;
    } else if (apartments[mid] < desired - k) {
      start = mid + 1;
    } else {
      end = mid - 1;
    }
  }

  return false;
}

console.log(totalMatches([60, 45, 80, 60], [30, 60, 75], 5));
