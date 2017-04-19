const readline = require('readline')
const MIN = 1
const MAX = 100

function guessTheNumber() {
  let theNumber = Math.floor((Math.random() * 100)) + 1
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  })

  const recurse = () => {
    rl.question(`Guess a number between ${MIN} and ${MAX}\n`, (answer) => {
      if(answer < theNumber) {
        console.log(`You guessed too low. The number was ${theNumber} and you gussed ${answer}`)
        
        recurse()
      } else if(answer > theNumber) {
        console.log(`You guessed too high. The number was ${theNumber} and you gussed ${answer}`)
        
        recurse()
      } else if(parseInt(answer) === parseInt(theNumber)) {
        console.log(`You got the number! The number was ${theNumber} and you guessed ${answer}`)
        
        rl.close()
        resolve()
      } else if(answer === 'exit') {
        
        rl.close()
        resolve()
      } else {
        
        console.log('Invalid command. Please type a number of \'exit\' (without quotes)')
        recurse()
      }
    })
  }

  recurse()
}

export default guessTheNumber