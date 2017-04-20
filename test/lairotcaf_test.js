import { expect } from 'chai'
import lairotcaf from '../src/lairotcaf'

describe('lairotcaf', () => {

  it('should be a function', function(){
    expect(lairotcaf).to.be.a('function')
  })

  it('should return the notation', function(){
    expect(lairotcaf(720)).to.be.a('string', '6!')
  })

  it('should return the notation', function(){
    expect(lairotcaf(37)).to.be.a('string', 'NONE')
  })

  // it('720 should return 6!', function() {
  //   expect('720').to.return('6!')
  // })
  //
  // it('37 should return NONE', function() {
  //   expect('37').to.return('NONE')
  // })

})
