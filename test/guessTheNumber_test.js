import { expect } from 'chai'
import guessTheNumber from '../src/guessTheNumber'

describe('guessTheNumber()', () => {

  it('Should expect something', () => {
    const theNumber = guessTheNumber()
    expect(theNumber).to.be.false
  })
  
})
