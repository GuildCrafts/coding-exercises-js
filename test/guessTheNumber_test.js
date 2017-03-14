import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('should be a function', function(){
      expect(guessTheNumber).to.be.a('function')
    })

  it('should generate a number between 1 and 100', function(){
    expect(guessTheNumber(10)).to.equal(true)
  })

  it('should prompt user to input a number', function(){
    exepct(guessTheNumber.prompt().to.equal('Please enter a number from 1 to 100.'))
  })





})
