import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('should be a function', function(){
    expect(guessTheNumber()).to.be.a('function')
  })

  it('should generate a number between 1 and 100', function(){
  expect(guessTheNumber()).to.equal(true)
  })

  xit('should prompt user to input a number', function(){
  exepct(guessTheNumber.prompt().to.equal('Please enter a number from 1 to 100.'))
  })
  //not sure if we need a test for the prompt

  xit('should check if the user input is an integer between 1 and 100', function(){
    expect(/*userInput(10)*/).to.equal(true)
  })

  xit('should return winning message if generated number is equal to the user input', function(){
    expect(guessTheNumber(guess).alert).to.equal("the guess matched the computer's number")
  })
  xit('should return message if generated number is greater than the user input', function(){
    expect(guessTheNumber(guess).alert).to.equal("the guess is lower than the computer's number")
  })

  xit('should return message if generated number is lower than the user input', function(){
    expect(guessTheNumber(guess).alert).to.equal("the guess is greater than the computer's number")

  })

  xit("should return exit message and terminate the program if the user input is 'exit'", function(){
    expect(guessTheNumber(guess).alert).to.equal("exit", /*terminate*/)

  })

})
