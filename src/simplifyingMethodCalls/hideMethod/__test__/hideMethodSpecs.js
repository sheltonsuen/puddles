import {
  attackDoubleEleven,
  attackDoubleElevenRefactored
} from '../hideMethod';

describe('hideMethod', () => {
  let clock;

  afterEach(() => {
    clock.restore();
  });

  context('before refactored', () => {
    it('should return true when attack successfully', () => {
      clock = sinon.useFakeTimers(new Date('2018-11-11 11:11:11').getTime());

      expect(attackDoubleEleven()).to.be.true;
    });

    it('should return false when attack failed', () => {
      clock = sinon.useFakeTimers(new Date('2018-11-10 11:11:11').getTime());

      expect(attackDoubleEleven()).to.be.false;
    });
  });

  context('after refactored', () => {
    it('should return true when attack successfully', () => {
      clock = sinon.useFakeTimers(new Date('2018-11-11 11:11:11').getTime());

      expect(attackDoubleElevenRefactored()).to.be.true;
    });

    it('should return false when attack failed', () => {
      clock = sinon.useFakeTimers(new Date('2018-11-10 11:11:11').getTime());

      expect(attackDoubleElevenRefactored()).to.be.false;
    });
  });
});
