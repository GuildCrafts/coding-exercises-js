function stringIndices(string, indice) {
 let wordArray = string.replace(",", "").replace("?","").split(" ")

if(indice > wordArray.length || indice < 1) {
  return ""
} else {
  return wordArray[indice - 1]
}


}

// stringIndices("Catch me outside, how about that?", 7);
