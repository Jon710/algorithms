// code question 1
// Developers at Amazon have their applications deployed on n servers. Initially, the ith server has an in id server[i] and can handle server[i] requests at a time.
// For maintenance purposes, some servers are replaced periodically. On a jth day, all the servers with id equal to replaceId[j] are replaced with servers with id newId[j]. that can serve newId[j] requests. The total number of requests served on a jth day is the sum of the ids of the servers that the application is running on.
// Given server[], replaceId[], and newId[], find the toal number of requests served by the servers each day.
// Note: the indices i and j are assumed to follow 1-based indexing.
// Suppose n = 2, server = [20, 10], replaceId = [10, 20], newId = [20, 1]. The answer should be [40, 2]
function totalRequestsEachDay(server, replaceId, newId) {
  const totalRequests = [];
  const serverMap = new Map();
  let totalRequestsSum = 0;

  // Initialize the server map and total request sum
  for (let i = 0; i < server.length; i++) {
    serverMap.set(server[i], (serverMap.get(server[i]) || 0) + 1);
    totalRequestsSum += server[i];
  }

  // Process each day's replacements
  for (let j = 0; j < replaceId.length; j++) {
    const currentReplaceId = replaceId[j];
    const currentNewId = newId[j];

    if (serverMap.has(currentReplaceId)) {
      // Calculate how many servers are being replaced
      const count = serverMap.get(currentReplaceId);

      // Update total requests sum
      totalRequestsSum -= count * currentReplaceId;
      totalRequestsSum += count * currentNewId;

      // Update the server map
      serverMap.set(currentReplaceId, 0);
      serverMap.set(currentNewId, (serverMap.get(currentNewId) || 0) + count);
    }

    // Store the result for the current day
    totalRequests.push(totalRequestsSum);
  }

  return totalRequests;
}

// Example usage
const server = [20, 10];
const replaceId = [10, 20];
const newId = [20, 1];

console.log(totalRequestsEachDay(server, replaceId, newId)); // Output: [40, 2]
