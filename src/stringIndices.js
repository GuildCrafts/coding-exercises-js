function stringIndices(inputString, index) {
  const inputArray = inputString.split(' ')
  return inputArray[index-1] === undefined ? '' : inputArray[index-1]
}

export default stringIndices