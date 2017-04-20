import { expect } from 'chai'
import parens from '../src/parens'

describe('parens()', () => {
  it('Should remove the parenthesis from example 1', () => {
    expect(parens('((1((23)(45)))6)')).to.equal('((1((23)(45)))6)')
  })

  it('Should remove the parenthesis from example 2', () => {
    expect(parens('(((1234)(((5)67))))')).to.equal('((1234)((5)67))')
  })

  it('Should remove the parenthesis from example 3', () => {
    expect(parens('12((3))')).to.equal('12(3)')
  })
})