function parens(inputString) {
  const characters = inputString.split('')
  const leftParens = {}
  const parenMatches = {}
  let depth = 0
  characters.forEach((character, index) => {
    if (character === '(') {
      leftParens[depth] = index
      depth++
    }
    if (character === ')') {
      depth--
      parenMatches[leftParens[depth]] = index
      delete leftParens[depth]
    }
  })

  const parensToRemove = []
  for (let leftParenIndex in parenMatches){
    leftParenIndex = Number(leftParenIndex)
    const rightParenIndex = parenMatches[leftParenIndex]
    const nextLeftParenIndex = leftParenIndex + 1
    const nextRightParenIndex = parenMatches[nextLeftParenIndex]
    if (
      leftParenIndex === nextLeftParenIndex - 1 &&
      rightParenIndex === nextRightParenIndex + 1
    ){
      parensToRemove.push(nextLeftParenIndex)
      parensToRemove.push(nextRightParenIndex)
    }
  }
  let outputCharacters = inputString.split('')
  parensToRemove
    .sort((a,b) => a-b)
    .forEach((characterIndex, loopCount) => {
      outputCharacters.splice(characterIndex-loopCount, 1)
    })
  return outputCharacters.join('')
}

export default parens
