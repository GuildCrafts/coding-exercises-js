export default function guessTheNumber() {
  var randomNum = Math.floor(Math.random() * (100)) + 1
  userInput = prompt("Guess a number between 1 and 100.\nTo stop playing type 'exit'.", "Write your number here")

  while (userInput){
    if (isNaN(userInput) && userInput !== "exit" ) {
      var userInput = prompt("You can only use numbers between 1 and 100.", "Write your number here")
    } else if (userInput == "exit") {
      return alert("Try again later!")
    } else if(randomNum > userInput) {
      var userInput = prompt("Try a higher number!", "Write your number here")
    } else if(randomNum < userInput) {
      var userInput = prompt("Try a lower number!", "Write your number here")
    } else {
      return alert("You won!")
    }
  }
}
