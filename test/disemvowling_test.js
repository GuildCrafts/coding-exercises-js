import { expect } from 'chai'
import disemvowling from '../src/disemvowling'

describe('disemvowling()', () => {
  const sampleString = 'Hello there Frank, again!'

  it('Should return the string without any vowels or spaces', () => {
    expect(disemvowling(sampleString)).to.equal('HllthrFrnk,gn!')
  })
})
