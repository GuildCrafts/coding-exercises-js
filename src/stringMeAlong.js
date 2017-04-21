export default function stringMeAlong(string) { 

  let longestUnique = null

  for(let i = 0; i <string.length; i++) {
    let currentString = string[i]
    let usedLetters = [string[i]]
    let j = i + 1
    while(j < string.length && usedLetters.length < 3) {
      if(usedLetters.includes(string[j])) {
        currentString = currentString + string[j]
      } else if (!(usedLetters.includes(string[j])) && usedLetters.length < 2) {
        currentString = currentString + string[j]
        usedLetters.push(string[j])
      }
     j++
    }

    if(longestUnique === null ) {
      longestUnique = currentString
    } else if (currentString.length > longestUnique.length) {
      longestUnique = currentString
    }

  }

  return longestUnique

}


// stringMeAlong("ghhiiii") //-> hhiiii

// stringMeAlong("efgefghiiikk") //-> iiikk
