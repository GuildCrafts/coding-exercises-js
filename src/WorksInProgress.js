
//Note: Mergesort from last week, and algorithms book, as well as datastructures and recursion in general needs to be studied

//String permutations
//My original that solves simple bar base case
//This does not work with "Bark" I will be studying recursion and other algorithm techniques to grow in this area
function stringPerms(string) {

  let stringPermutations = []

  for(let i = 0; i < string.length; i++) {
    let currentString1 = string[i]
    let currentString2 = string[(string.length - 1) - i]
    for(j = 0; j < string.length; j++) {
      if(!(currentString1.includes(string[j]))) {
        currentString1 = currentString1 + string[j]
      }
      if(!(currentString2.includes(string[(string.length - 1) - j]))) {
        currentString2 = currentString2 + string[(string.length - 1) - j]
      }
    }
    stringPermutations.push(currentString1)
    stringPermutations.push(currentString2)
  }

  return stringPermutations
}

// stringPerms("bar")

//Frankies starter example, also see JRob and Frakies final example in Slack and study it over weekend
// let myPermutaions = []
// let toPermute = []
//
// function stringPerms( word ) {
//   // init when you start the permutaion process
//   if( myPermutaions.length === 0 ){
//     myPermutaions.push(word)
//     toPermute.push(word)
//   }
//
//   // should we continue permutin?
//   if( toPermute.length > 0 ) {
//     permute( toPermute.pop() )
//   } else {
//     return myPermutaions
//   }
//
// }
//
// function permute( someWord ) {
//
//
//   // push permutations on to stacks based on checks
//   // after we do the nested loop permutation thing
//   if( !myPermutaions.contains(currentString1) ) {
//      myPermutaions.push(currentString1)
//   }
//     stringPermutations.push(currentString2)
// }
//
// stringPerms("bark")
//
//
//
// function stringPerms(string) {
//
//   let stringPermutations = []
//
//   for(let i = 0; i < string.length; i++) {
//     let currentString1 = string[i]
//     let currentString2 = string[(string.length - 1) - i]
//     for(j = 0; j < string.length; j++) {
//       if(!(currentString1.includes(string[j]))) {
//         currentString1 = currentString1 + string[j]
//       }
//       if(!(currentString2.includes(string[(string.length - 1) - j]))) {
//         currentString2 = currentString2 + string[(string.length - 1) - j]
//       }
//     }
//     stringPermutations.push(currentString1)
//     stringPermutations.push(currentString2)
//   }
//
//   return stringPermutations
// }
//
// stringPerms("bark")



//Successfully translated a fibonnacci number to a decimal number, but could not translate a decimal number to a fib number yet
function fibTranslator(string) {

  let fibArray = []
  for(let i = 0; i < string.length; i++) {
    if (i === 0) {
      fibArray.push(1)
    }
    if (i === 1) {
      fibArray.push(1)
    }
    if (i > 1) {
      fibArray.push(fibArray[i - 1] + fibArray[i - 2])
    }
  }

   let sum = 0
  for(let j = string.length - 1; j >= 0; j--) {
    if(string[j] === "1") {
      sum = sum + fibArray[(string.length - 1) - j]
    }
  }
  console.log(fibArray)
  return sum
}

function fibonacciTranslator(string) {
  let array = string.split(" ")

  let finalString;
  if(array[0] === "fib") {
    finalString = fibTranslator(array[1])
  }

  if(array[0] === "decimal") {
    finalString = decTranslator(array[1])
  }

  return finalString
}

fibonacciTranslator("fib 11111")

//Function attempt for translating a dec to a fib number
// function decTranslator(number) {
//
//
// let accrue;
// let pairs;
// let accrueIndices = []
// let pairsIndices = []
// let i = 0
// let fibArray = []
//   while(accrue !== number && pairs !== number) {
//     if (i === 0) {
//       fibArray.push(1)
//     }
//     if (i === 1) {
//       fibArray.push(1)
//     }
//     if (i > 1) {
//       fibArray.push(fibArray[i - 1] + fibArray[i - 2])
//     }
//
//    accrue = 0
//    pairs = 0
//     for(let j = 0; j < fibArray.length; j++) {
//
//     }
//
//
//     if(pairs === number) {
//       let string = ''
//       for(let k = 0; k < fibArray.length; k++) {
//         if(k === pairsIndices[0] || k === pairsIndices[1]) {
//           string = string + "1"
//         } else {
//           string = string + "0"
//         }
//       }
//     } else if (accrue === number) {
//         for(let l = 0; l < fibArray.length; l++) {
//           if(l === accrueIndices[l]) {
//             .........
//           }
//         }
//     }
//
//
//   i++
//   }
//
//   }
//
// }


//Began Date maker and am in the process of approaching it
function dateMaker(string) {

  let months = {
    Jan: "01",
    Feb: "02",
    Mar: "03",
    Apr: "04",
    May: "05",
    Jun: "06",
    Jul: "07",
    Aug: "08",
    Sep: "09",
    Oct: "10",
    Nov: "11",
    Dec: "12"
  }

    let dateArray = [];
    letdateString = ""
  if(string.split("").includes("#")) {
    dateArray = string.split("#")
  } else if (string.split("").includes("*")) {
    dateArray = string.split("*")
  } else if (string.split("").includes(" ")) {
    dateArray = string.split(" ")
  } else if (string.split("").includes("/")) {
    dateArray = string.split("/")
  } else if (string.split("").includes("-")) {
    dateArray = string.split("-")
  }


  return dateArray
}


// dateMaker("09#65#21")
// dateMaker("Dec 26, 75")
// dateMaker("15*10*1981")
dateMaker("Mar 21, 1980")
// dateMaker("01/11/55")
// dateMaker("1964-01-10")

// 09#65#21
// 06#72#03
// Dec 26, 75
// Jul 13, 07
// Nov 21, 14
// 15*10*1981
// 13*02*1992
// 10#51#16
// 1964-01-10
// 06*04*1965
// 01#07#27
// 02*03*1999
// 01/11/55
// 12#16#08
// Oct 25, 58
// May 17, 08
// Mar 21, 1980
// 07#71#24
// 11/15/78
// 1996-10-24
// 07*11*1953
// 1970-03-13
// Jul 27, 1999
// 01#95#04
// 05#78#26
// 04/22/44
// 17*07*1979
// 07#72#15
// 02/25/08

//Attempt at Parens be gone was able to handle two of the base cases but not the last one
function parensCleaner(string) {


  let expressions = null

  while(expressions === null) {
  let openings = 0
  let closings = 0
  let fistIndex = 0
  let farthestIndex = 0

  for(let i = 0; i < string.length; i++) {
    if(string[i] === "(") {
      if(openings === 0) {
        firstIndex = i
      }
      openings++
    }
    if(string[i] === ")") {
      farthestIndex = i
      closings++
    }
    if(!(isNaN(string[i])) && isNaN(string[i - 1]) && openings > closings) {
      expressions++
    }
  }
    console.log(expressions)
    console.log(openings)
    console.log(firstIndex)
    console.log(farthestIndex)
    if(expressions < openings && expressions % 2 !== 0 ) {
      string = string.slice(0, firstIndex) + string.slice(firstIndex + 1,farthestIndex) + string.slice(farthestIndex + 1, string.length + 1)
    }
    if(expressions < openings - 1) {
      expressions = null
    } else {
      break;
    }
  }

  return string
}

// parensCleaner("12((3))") //12(3) PASSED

// parensCleaner("((1((23)(45)))6)") //((1((23)(45)))6), same PASSED

parensCleaner("(((1234)(((5)67))))") //((1234)((5)67))


//Psuedocode
//How many is too many?
//If you can strip the expression of one set of parentheses, and the same expression still contains parentheses, it has too many parentheses.
// So, you myst be able to tell what AN expression is. The issue is really determing what an expression is.


(((1234)(((5)67))))
opening, 1 1 1 1 1 1
closing, 1 1 1 1 1 1
we have 3 expressions with the current indictor
because only using numbers as indicators


(1234) ((5)67)
opening, 1
closing, 1

opening

( (1234) ((5)67) )
opening, 1 1 1 1
closing, 1 1 1 1
this is one braod expression


stack- always put numbers on the stack...
put opening parens on the stack, if the stack has a parens on it, and the next thing is a number



// an expression occurs every time opening parens is not equal to zero, and opening parens is equal to closing parens again.
// NO- and expression occurs every time you have an opening parens and a number and a number and a closing parens

( (1234) ((5)67) )

stack = [((1234))]
whenever you have a complete expression pop off the stack?


//
// WHERE IN THE JSON
// RESOLVE SYMLINKS
// are the only ones not started
