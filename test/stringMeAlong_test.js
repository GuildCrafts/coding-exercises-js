import { expect } from 'chai'
import stringMeAlong from '../src/stringMeAlong'

describe('stringMeAlong()', function(){

  it('should be a function', function(){
    expect(stringMeAlong).to.be.a('function')
  })

  it('given an input string, prints the longest substring that contains a maximum of two unique characters.', function(){
    expect(stringMeAlong("ghhiiii")).to.deep.equal("hhiiii")
  })

  it('able to parse through a mixed string and return the longest substring with maximum of two unique farthest to the right', function(){
    expect(stringMeAlong("efgefghiiikk")).to.deep.equal("iiikk")
  })
})
