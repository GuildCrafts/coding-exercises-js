import { expect } from 'chai'
import brailleTranslator from '../src/brailleTranslator'

describe('brailleTranslator()', function(){

  it('should be a function', function(){
    expect(brailleTranslator).to.be.a('function')
  })

  it('returns a word when given the braille version', function(){
    expect(brailleTranslator("O.OO..O..O..O.O.O.O.O.O.O..OO..OOO.OO..OO.O.OOO.O.O.O.OO.O..")).to.deep.equal("helloworld")
  })
})
