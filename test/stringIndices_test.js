import { expect } from 'chai'
import stringIndices from '../src/stringIndices'

describe('stringIndices()', () => {
  const sampleString = 'Hello there Frank'

  it('Should return the string of a proper index', () => {
    expect(stringIndices(sampleString, 1)).to.equal('Hello')
    expect(stringIndices(sampleString, 2)).to.equal('there')
    expect(stringIndices(sampleString, 3)).to.equal('Frank')
  })

  it('Should return empty string if passed out of bounds index', () => {
    expect(stringIndices(sampleString, 4)).to.equal('')
  })

  it('Should return empty string if passed a negative index', () => {
    expect(stringIndices(sampleString, -1)).to.equal('')
  })
})
