import { expect } from 'chai'
import stringMe from '../src/stringMe'

describe('stringMe()', () => {
  it('Should print correct characters with first example.', () => {
    expect(stringMe('ghhiiii')).to.equal('hhiiii')
  })

  it('Should print correct characters with second example.', () => {
    expect(stringMe('efgefghiiikk')).to.equal('iiikk')
  })

  it('Should print correct characters with third example.', () => {
    expect(stringMe('alaaaakazaam bamm kkuurplllow-chooopel')).to.equal('aaaalll')
  })
})