import { expect } from 'chai';
import stringIndices from '../src/stringIndices';

describe('stringIndices', function() {

  context('valid arguments', function() {

    it('correct for first word', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, 1)).to.equal('This');
    });

    it('correct for last word', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, 5)).to.equal('words');
    });

    it('correct for index after last word', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, 8)).to.equal('');
    });

    it('correct for index 0', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, -4)).to.equal('');
    });

    it('correct for index before first word', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, -4)).to.equal('');
    });

    it('correct for intermediate word', function() {
      const string = 'This is a few words';
      expect(stringIndices(string, 3)).to.equal('a');
    });

    it('correct for blank string', function() {
      const string = '';
      expect(stringIndices(string, 1)).to.equal('');
    });

    it('correct for non-Latin script', function() {
      const string = '그때부터 움집을 지어 가족끼리 살았다';
      expect(stringIndices(string, 2)).to.equal('움집을');
    });

    it('correct for complex punctuation', function() {
      const string = 'английски – grammar, руски – грамматика и т.н. Българските думи за „граматика“ са сло̀вница и бу̀квеница';
      expect(stringIndices(string, 10)).to.equal('граматика');
    });

  });

  context('invalid arguments', function() {

    it('correct for number as argument 0', function() {
      expect(stringIndices(456, 1)).to.be.undefined;
    });

    it('correct for array as argument 0', function() {
      expect(stringIndices(['this is wrong'], 3)).to.be.undefined;
    });

    it('correct for string as argument 1', function() {
      expect(stringIndices('this is wrong', '3')).to.be.undefined;
    });

    it('correct for string as argument 1', function() {
      expect(stringIndices('this is wrong', '3')).to.be.undefined;
    });

    it('correct for array as argument 1', function() {
      expect(stringIndices('this is wrong', [3])).to.be.undefined;
    });

    it('correct for noninteger as argument 1', function() {
      expect(stringIndices('this is wrong', 1.5)).to.be.undefined;
    });

    it('correct for missing argument 1', function() {
      expect(stringIndices('this is wrong')).to.be.undefined;
    });

  });

});
