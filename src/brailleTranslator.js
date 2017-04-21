export default function brailleTranslator(string) {

 let alphabet = {
  a: "O.....",
  b: "O.O...",
  c: "OO....",
  d: "OO.O..",
  e: "O..O..",
  f: "OOO...",
  g: "OOOO..",
  h: "O.OO..",
  i: ".OO...",
  j: ".OOO..",
  k: "O...O.",
  l: "O.O.O.",
  m: "OO..O.",
  n: "OO.OO.",
  o: "O..OO.",
  p: "OOO.O.",
  q: "OOOOO.",
  r: "O.OOO.",
  s: ".OO.O.",
  t: ".OOOO.",
  u: "O...OO",
  v: "O.O.OO",
  w: ".OOO.O",
  x: "OO..OO",
  y: "OO.OOO",
  z: "O..OOO"
 }

  let letter = ""
  let letterArray = []
  let countLetter = 0
for(let i = 0; i < string.length + 1; i++) {
  if (countLetter < 6) {
    letter = letter + string[i]
    countLetter++
  } else {
    letterArray.push(letter)
    countLetter = 0
    letter = ''
    i--
  }
}


   let finalWord = ""
 for(let j = 0; j < letterArray.length; j++) {
  for(let keys in alphabet) {
   if(alphabet[keys] === letterArray[j]) {
    finalWord = finalWord + keys
   }
 }
 }

 return finalWord

}

// brailleTranslator("O.OO..O..O..O.O.O.O.O.O.O..OO..OOO.OO..OO.O.OOO.O.O.O.OO.O..")
