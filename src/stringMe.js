function populate(place, index, count, str) {
  place.index = index
  place.count = count
  place.str = str
}

function stringMe(inputString) {  
  let matches = inputString.match(/(.)(\1)+/g)
  
  let first = {}, second = {}
  populate(first, 0, -Infinity, '')
  populate(second, 0, -Infinity, '')

  matches.forEach( (match, index) => {
    if(match.length > first.count) {
      if(second.str === '') {
        populate(second, first.index, first.count, first.str)
      }
      populate(first, index, match.length, match)
    } else if(match.length > second.count) {
      populate(second, index, match.length, match)
    }
  })

  if(first.index < second.index) {
    return first.str+second.str
  } else {
    return second.str+first.str
  }

}

export default stringMe