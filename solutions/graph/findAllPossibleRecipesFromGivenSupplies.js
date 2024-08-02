/**
 * @param {string[]} recipes
 * @param {string[][]} ingredients
 * @param {string[]} supplies
 * @return {string[]}
 */
var findAllRecipes = function (recipes, ingredients, supplies) {
  const suppliesSet = new Set(supplies);
  const recipesMap = new Map();
  const visited = new Set();
  const result = [];

  function canCreate(recipe) {
    if (suppliesSet.has(recipe)) return true;

    if (!recipesMap.has(recipe) || visited.has(recipe)) return false;

    visited.add(recipe);

    const recipeIdx = recipesMap.get(recipe);
    for (let i = 0; i < ingredients[recipeIdx].length; i++) {
      if (!canCreate(ingredients[recipeIdx][i])) return false;
    }

    suppliesSet.add(recipe);
    return true;
  }

  for (let i = 0; i < recipes.length; i++) {
    recipesMap.set(recipes[i], i);
  }

  for (const recipe of recipes) {
    if (canCreate(recipe)) result.push(recipe);
  }

  return result;
};

// TOPOLOGICAL SORT
function findAllRecipes(recipes, ingredients, supplies) {
  const graph = {}; // To store edges from ingredients to recipes using an object
  const inDegree = {}; // To store the number of dependencies for each recipe using an object
  const queue = []; // Queue for topological sort
  const result = []; // To store the final list of recipes that can be made

  // Initialize the graph and inDegree object
  for (let i = 0; i < recipes.length; i++) {
    const recipe = recipes[i];

    if (!graph[recipe]) graph[recipe] = [];
    if (!inDegree[recipe]) inDegree[recipe] = 0;

    for (let j = 0; j < ingredients[i].length; j++) {
      const ingredient = ingredients[i][j];
      if (!graph[ingredient]) graph[ingredient] = [];
      graph[ingredient].push(recipe); // Add edge from ingredient to recipe
      inDegree[recipe]++; // Increment in-degree of recipe
    }
  }

  // Enqueue initially available supplies (in-degree 0)
  for (const supply of supplies) {
    if (graph[supply]) {
      for (const recipe of graph[supply]) {
        inDegree[recipe]--;
        if (inDegree[recipe] === 0) queue.push(recipe);
      }
    }
  }

  // Perform topological sort
  while (queue.length > 0) {
    const current = queue.shift();
    result.push(current); // Current recipe can be made
    if (graph[current]) {
      for (const next of graph[current]) {
        inDegree[next]--;
        if (inDegree[next] === 0) queue.push(next); // Next recipe can now be made
      }
    }
  }

  return result;
}

const recipes = ["bread"];
const ingredients = [["yeast", "flour"]];
const supplies = ["yeast", "flour", "corn"];
console.log(findAllRecipes(recipes, ingredients, supplies)); // ["bread"]
