import { expect } from 'chai'
import stringPermutations from '../src/stringPermutations'

describe('stringPermutations', () => {

  it('should be a function', function(){
    expect(stringPermutations).to.be.a('function')
  })

  it('should return an array', function(){
    expect(stringPermutations('bra')).to.be.a('permutation')
  })

})
