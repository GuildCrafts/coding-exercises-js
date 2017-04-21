import { expect } from 'chai'
import lairotcaf from '../src/lairotcaf'

describe('lairotcaf()', function(){

  it('should be a function', function(){
    expect(lairotcaf).to.be.a('function')
  })

  it('returns the number in the factorial sequence when given a factorial', function(){
    expect(lairotcaf(720)).to.deep.equal(6)
  })
})
