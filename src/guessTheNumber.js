
export default function guessTheNumber() {

  var guess = null;
  var number = Math.floor(Math.random() * 100) + 1;

  //Wow this is a really good example of where type coersion IS wanted because !== actually takes the prompt string and the number and says well, they are not completely equal, one is a stirng.
  while(guess === null || guess != number && guess != "exit") {
    guess = prompt("Guess a number between 1 and 100");

    if (guess < number) {
      alert("higher")
    } else if (guess > number) {
      alert("lower")
    }

  }

  alert("If you made it passed the loop you must have guess right!, or possibly you cheated and typed exit")
}


//Alternative is to put it in the if statement
// function guessingGame() {

//   var guess = null;
//   var number = Math.floor(Math.random() * 100) + 1;

//Wow this is a really good example of where type coersion IS wanted because !== actually takes the prompt string and the number and says well, they are not completely equal, one is a stirng.

//   while(guess === null || guess != "exit" || guess != number) {
//     guess = prompt("Guess a number between 1 and 100");

//     if (guess < number) {
//       alert("higher");
//     } else if (guess > number) {
//       alert("lower");
//     } else if (guess === "exit") {
//       break;
//     }


//   }

//   alert("If you made it passed the loop you must have guess right!, or possibly you cheated and typed exit")
// }


// guessingGame()
