import { expect } from 'chai'
import stringIndices from '../src/stringIndices.js'

describe('stringIndices()', () => {

  it('should be a function', function(){
    expect(stringIndices).to.be.a('function')
  })

  it('should return a string', function(){
    expect(stringIndices(str)).to.be.a('string')
  })

})
