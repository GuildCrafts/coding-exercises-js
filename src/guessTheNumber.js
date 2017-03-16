export default function guessTheNumber() {
  var randomNum = Math.floor(Math.random() * (100)) + 1

  var userInput = window.prompt("Guess a number between 1 and 100.\nTo stop playing type 'exit'.", "Write your number here")

  while (userInput !== randomNum){
    if (isNaN(userInput) && userInput !== "exit") {
      var userInput = window.prompt("You can only use numbers between 1 and 100.", "Write your number here")
    } else if (userInput === "exit") {
      return window.alert("Try again later!")
    } else if(randomNum > userInput) {
      var userInput = window.prompt("Try a higher number!", "Write your number here")
    } else if(randomNum < userInput) {
        var userInput = window.prompt("Try a lower number!", "Write your number here")
    } else {
      return window.alert("You won!")
    }
  }
}
