import { getAverage, getAverageRefactored } from '../replaceExpectionWithTest';

describe('replaceExpectionWithTest', () => {
  context('before refactored', () => {
    it('should retern the average when has average', () => {
      const values = [10, 20];

      expect(getAverage(values)).to.be.equal(15);
    });

    it('should return -1 when there has not average', () => {
      const values = [];

      expect(getAverage(values)).to.be.equal(-1);
    });
  });

  context('after refactored', () => {
    it('should retern the average when has average', () => {
      const values = [10, 20];

      expect(getAverageRefactored(values)).to.be.equal(15);
    });

    it('should return -1 when there has not average', () => {
      const values = [];

      expect(getAverageRefactored(values)).to.be.equal(-1);
    });
  });
});
