import { expect } from 'chai'
import scrabBag from '../src/scrabBag'

describe('scrabBag()', () => {

  it('should be a function', () => {
    expect(scrabBag).to.be.a('function');
  });

  it('tests for the output to be correct', () => {
    expect(scrabBag('AERETOXMYCNS_B')).to.eql({ '0': 'X',
      '1': 'B, C, J, K, M, Q, Y, Z, _',
      '2': 'F, H, P, V, W',
      '3': 'G, S',
      '4': 'D, L, U',
      '5': 'N, R, T',
      '7': 'O',
      '8': 'A',
      '9': 'I',
      '10': 'E',
      remaining: 86 });
  });

})
