import { expect } from 'chai'
import disemvowelments from '../src/disemvowelments.js'

describe('disemvowelments(correctArray)', () => {

  it('should be a function', function(){
    expect(disemvowelments).to.be.a('function')
  })

  it('should return a string', function(){
    const element = 'i am groot'
    expect(disemvowelments(element)).to.be.a('string')
  })
})
