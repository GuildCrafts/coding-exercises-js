import { expect } from 'chai'
import disemvoweler from '../src/disemvoweler'

describe('disemvoweler()', function(){

  it('should be a function', function(){
    expect(disemvoweler).to.be.a('function')
  })

  it('returns a string with all vowels removed when given a string with vowels', function(){
    expect(disemvoweler("i am groot")).to.deep.equal("mgrt")
  })
})
