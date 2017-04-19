function disemvowling(inputString) {
  return inputString.replace(/[aeiouAEIOU\s]/g, '')
}

export default disemvowling