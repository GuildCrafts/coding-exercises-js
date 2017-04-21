import { expect } from 'chai'
import stringIndices from '../src/stringIndices'

describe('stringIndices()', function(){

  it('should be a function', function(){
    expect(stringIndices).to.be.a('function')
  })

  it('returns the word within a string at a particular indice', function(){
    expect(stringIndices("Catch me outside, how about that?", 3)).to.deep.equal("outside")
  })

  it('returns an empty string if given an indice outside of the length of the string', function(){
    expect(stringIndices("Catch me outside, how about that?", 7)).to.deep.equal("")
  })
})
