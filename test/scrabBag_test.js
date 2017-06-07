import { expect } from 'chai';
import scrabBag from '../src/scrabBag';
import englishTally from '../data/scrabBag/english';

describe('scrabBag', function() {

  context('valid arguments', function() {

    it('correct for toy language', function() {
      const startTally = {
        A: 4,
        B: 1,
        C: 2
      };
      const played = 'BAA';
      expect(scrabBag(startTally, played)).to.eql('2: A, C\n0: B\n');
    });

    it('correct for English', function() {
      const startTally = englishTally;
      const played = 'BOOKSTORE';
      expect(scrabBag(startTally, played)).to.eql(
        '11: E\n9: A, I\n6: N\n5: O, R, T\n4: D, L, U\n3: G, S\n2: C, F, H, M, P, V, W, Y, _\n1: B, J, Q, X, Z\n0: K\n'
      );
    });

  });

  context('invalid arguments', function() {

    it('correct for excess tiles in toy language', function() {
      const startTally = {
        A: 4,
        B: 1,
        C: 2
      };
      const played = 'BAAB';
      expect(scrabBag(startTally, played)).to.be.undefined;
    });

    it('correct for excess tiles in English', function() {
      const startTally = englishTally;
      const played = 'BOOKKEEPER';
      expect(scrabBag(startTally, played)).to.be.undefined;
    });

    it('correct for missing argument 1', function() {
      const startTally = englishTally;
      expect(scrabBag(startTally)).to.be.undefined;
    });

    it('correct for string argument 0', function() {
      const startTally = 'A: 5, B, 3';
      const played = 'ABA';
      expect(scrabBag(startTally, played)).to.be.undefined;
    });

    it('correct for array argument 0', function() {
      const startTally = [['A', 5], ['B', 3]];
      const played = '01';
      expect(scrabBag(startTally, played)).to.be.undefined;
    });

  });

});
