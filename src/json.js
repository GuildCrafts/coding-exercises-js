function stringPop(inputString, deliminator) {
  const returnString = inputString.split(deliminator)
  if(returnString.length <= 1) {
    return ''
  }
  returnString.pop()
  return returnString.join(deliminator)
}

function json(inputJson, searchStr) {
  let correctPath = ''
  let foundPathAlreadyFlag = false
  let ongoingPath
  const recurse = (parent) => {
    const props = Object.getOwnPropertyNames(parent)

    props.forEach( prop => {
      if(ongoingPath === '' || ongoingPath === undefined) {
        ongoingPath = prop
      } else {
        ongoingPath = ongoingPath+' -> '+prop
      }
      if(parent[prop] === searchStr) {
        correctPath = ongoingPath
        foundPathAlreadyFlag = true
        return
      }
      if(parent[prop] instanceof Object) {
        recurse(parent[prop])
        if(foundPathAlreadyFlag) {
          return
        }
      }
      ongoingPath = stringPop(ongoingPath, ' -> ')
    })
  }
  recurse(inputJson)
  return correctPath
}

export default json