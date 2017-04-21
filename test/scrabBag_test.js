import { expect } from 'chai'
import scrabBag from '../src/scrabBag'

describe('scrabBag()', function(){

  it('should be a function', function(){
    expect(scrabBag).to.be.a('function')
  })

  it('returns a reversed hash of amounts and the letters that have that amount left in the game', function(){
    expect(scrabBag("AERETOXMYCNS_B")).to.deep.equal({ '0': [ 'X' ],
  '1': [ 'B', 'C', 'J', 'K', 'M', 'Q', 'Y', 'Z', '_' ],
  '2': [ 'F', 'H', 'P', 'V', 'W' ],
  '3': [ 'G', 'S' ],
  '4': [ 'D', 'L', 'U' ],
  '5': [ 'N', 'R', 'T' ],
  '7': [ 'O' ],
  '8': [ 'A' ],
  '9': [ 'I' ],
  '10': [ 'E' ] })
  })
})
