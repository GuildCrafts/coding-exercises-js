/*
  Function declaration for scrabBag and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 0.
*/
export default function scrabBag(startTally, played) {
  // If the arguments are superficially valid:
  if (
    arguments.length === 2
    && typeof startTally === 'object'
    && ! Array.isArray(startTally)
    && typeof played === 'string'
  ) {
    // Identify an array of the tile types in the game.
    const tileTypes = Object.keys(startTally);
    // For each played tile:
    for (let i = 0; i < played.length; i++) {
      // If its type is not in the game:
      if (! tileTypes.includes(played[i])) {
        // Return a failure result.
        return undefined;
      }
    }
    // All played tiles’ types are in the game.
    // Initialize a tally of unplayed tiles’ types.
    let currentTally = Object.assign({}, startTally);
    // For each played tile:
    for (let j = 0; j < played.length; j++) {
      // Update the tally.
      currentTally[played[j]]--;
      // If the new count of the tile’s type is negative:
      if (currentTally[played[j]] < 0) {
        // Return a failure result.
        return undefined;
      }
    }
    // The tally is current.
    // Initialize the result.
    let currentCounts = [];
    // For each tile type:
    for (const thisType of tileTypes) {
      // If it is the first type with its current count:
      if (currentCounts[currentTally[thisType]] === undefined) {
        // Initialize that count’s type array.
        currentCounts[currentTally[thisType]] = [thisType];
      }
      // Otherwise, i.e. if its current count already has a type array:
      else {
        // Append the type to it.
        currentCounts[currentTally[thisType]].push(thisType);
      }
      // Include it in an array of types with its current count in the result.
    }
    // Initialize the result.
    let result = '';
    // For each possible current count, from largest to smallest:
    for (let k = currentCounts.length - 1; k >= 0; k--) {
      // If any tile type has the count:
      if (currentCounts[k] !== undefined) {
        /*
          Append the count and a sorted list of the types with the count
          to the result.
        */
        result += k + ': ' + currentCounts[k].sort().join(', ') + '\n';
      }
    }
    // Return the result.
    return result;
  }
}
