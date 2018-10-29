import {
  setEnergyToEmpty,
  initialEnergyAndMagicPointRefactored
} from '../renameMethod';

describe('Rename Method', () => {
  context('before refactoring', () => {
    it('shoud initial the energy and magic point to zero', () => {
      const person = { energy: 10, magicPoint: 15 };

      setEnergyToEmpty(person);

      expect(person.energy).to.be.equal(0);
      expect(person.magicPoint).to.be.equal(0);
    });
  });

  context('after refactoring', () => {
    it('shoud initial the energy and magic point to zero', () => {
      const person = { energy: 10, magicPoint: 15 };

      initialEnergyAndMagicPointRefactored(person);

      expect(person.energy).to.be.equal(0);
      expect(person.magicPoint).to.be.equal(0);
    });
  });
});
