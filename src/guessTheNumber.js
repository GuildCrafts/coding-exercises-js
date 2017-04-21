export default function guessTheNumber() {
  var readlineSync = require('readline-sync');
  var userGuess = readlineSync.question('What is my number?')
  var randomSelect = Math.floor(Math.random() * 100) + 1;

  if(userGuess < randomSelect) {
    return "You're too low.";
  } else {
    if(userGuess > randomSelect){
      return "You're too high.";
    }
    else {
      return "You win!";
    }
  }

}
