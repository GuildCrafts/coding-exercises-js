export default function disemvoweler(string) {
  let cleanArray = string.split("")
  let disemvoweled = ''
  console.log(cleanArray)

  for(let i = 0; i < cleanArray.length; i++) {
    if (cleanArray[i] != "a" && cleanArray[i] != "e" && cleanArray[i] != "i" && cleanArray[i] != "o" && cleanArray[i] != "u" && cleanArray[i] != " ") {
      disemvoweled = disemvoweled + cleanArray[i]
    }
  }

  return disemvoweled
}

// disemvoweler("i am groot")
