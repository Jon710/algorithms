// ref: https://algo.monster/problems/backtracking
// https://betterprogramming.pub/the-technical-interview-guide-to-backtracking-e1a03ca4abad
function dfs(state, res) {
  if (isSolution(state)) {
    // add a copy of the state to the result
    res.push(...state);
    return;
  }

  for (const choice of choices) {
    state.push(choice);
    dfs(state, res);
    state.pop();
  }
}

// template pseudocode
function backTrackAlgorithm(parameters) {
  // make use of closures*** to declare function inside another function
  function backtrack(startingState) {
    if (finalConditionIsMet) {
      // add result;
    } else {
      // loop from the starting state
      // try a candidate;
      backtrack(adjustedStartingState);
      // remove the candidate;
    }
  }

  // handle edge cases
  // initialize the result structure;
  backtrack(startingState);
  return result;
}

// **A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment).
// In other words, a closure gives you access to an outer function's scope from an inner function.
// In JavaScript, closures are created every time a function is created, at function creation time.
