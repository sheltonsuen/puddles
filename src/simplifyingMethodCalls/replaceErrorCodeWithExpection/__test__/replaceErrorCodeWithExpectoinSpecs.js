import {
  getMoneyTotal,
  getMoneyTotalRefactored
} from '../replaceErrorCodeWithExpection';

describe('replaceErrorCodeWithExpection', () => {
  context('before refactored', () => {
    it('should return the monety total of the person if the person is not locked', () => {
      const person = { money: 100, isLocked: false };

      expect(getMoneyTotal(person)).to.be.equal(100);
    });

    it('should return -1 when the person is locked', () => {
      const person = { money: 100, isLocked: true };

      expect(getMoneyTotal(person)).to.be.equal(-1);
    });
  });

  context('before refactored', () => {
    it('should return the monety total of the person if the person is not locked', () => {
      const person = { money: 100, isLocked: false };

      expect(getMoneyTotalRefactored(person)).to.be.equal(100);
    });

    it('should throw person is locked error when the person is locked', () => {
      const person = { money: 100, isLocked: true };

      expect(() => getMoneyTotalRefactored(person)).to.throw(
        Error,
        'person is locked'
      );
    });
  });
});
