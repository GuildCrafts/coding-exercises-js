export default function stringPermutations() {
  const permutation = require('string-permutation')

  // permutation('bra', 3)
  permutation('bra', {minSize: 3, maxSize: 3, recursive: true})

}
















//   function permut(string) {
//     if (string.length < 2)
//       return string;
//     var permutations = [];
//
//     for (var i=0; i<string.length; i++) {
//       var char = string[i];
//
//       if (string.indexOf(char) != i)
//         continue;
//
//       var remainingString = string.slice(0,i) + string.slice(i+1, string.length);
//
//       for (var subPermutation of permut(remainingString))
//           permutations.push(char + subPermutation)
//     }
//     return permutations;
//   }
// }
