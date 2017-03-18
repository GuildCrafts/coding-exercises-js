import { expect } from 'chai'
import playItAgain from '../src/playItAgain'

describe('playItAgain()', () => {

  it('exist', () => {
    expect(playItAgain).to.be.a('function')
  })

  it('', () => {
    expect( playItAgain("hello") ).to.equal("hll")
  })
  it('', () => {
    expect( playItAgain("") ).to.equal("")
  })
})
