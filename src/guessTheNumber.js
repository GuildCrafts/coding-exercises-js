export default function guessTheNumber() {
  // function getRandomInt(0, 101) {
  let stillGoing = true
   let goal = Math.floor(Math.random() * (101)) + 1;
   let message = "Welcome to guess a number, insert guess here";

   while (stillGoing){
     let userGuess = window.prompt(message);

     if (userGuess == goal){
       window.alert("you guessed correctly")
       stillGoing = false;
     } else if (userGuess > goal){

       message = "Oops, your guess was too large!";

     } else {
       message = "Oops, your guess was too small!"
     }

   }



}
