import XRegExp from 'xregexp';

/*
  Function declaration for stringIndices and export statement making that
  function the default export from this module.
  Enforced argument requirements:
    0. The argument count is 2.
    1. string is a string.
    2. index is an integer.
*/
export default function stringIndices(string, index) {
  // If the arguments are superficially valid:
  if (
    arguments.length === 2
    && typeof string === 'string'
    && typeof index === 'number'
    && Math.floor(index) === Math.ceil(index)
  ) {
    // Identify an array of the words in the string.
    const words = XRegExp.split(
      string, XRegExp('[^\\pL\\pN]*\\pZ[^\\pL\\pN]*')
    );
    // Return the specified word, or a blank string if none.
    return words[index - 1] || '';
  }
}
