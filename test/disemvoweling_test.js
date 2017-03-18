import { expect } from 'chai'
import disemVowling from '../src/Disemvowling'

describe('disemVowling()', () => {

  it('exist', () => {
    expect(disemVowling).to.be.a('function')
  })

  it('removes the vowels', () => {
    expect( disemVowling("hello") ).to.equal("hll")
  })
  it('removes the spaces', () => {
    expect( disemVowling("hello there max") ).to.equal("hllthrmx")
  })
})
