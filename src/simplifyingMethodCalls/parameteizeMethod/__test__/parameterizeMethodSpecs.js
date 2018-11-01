import {
  querySpecialPerson,
  querySpecialPersonRefactored
} from '../parameteizeMethod';

describe('parameterizeMethod', () => {
  context('before refactor', () => {
    it('should return the special person of the person list', () => {
      const personList = [{ energy: 100 }, { energy: 90 }, { energy: 10 }];

      const specialPerson = querySpecialPerson(personList);

      expect(specialPerson).to.deep.equal([{ energy: 100 }, { energy: 90 }]);
    });

    it('should return empty array if the list don`t have any special person', () => {
      const personList = [{ energy: 10 }];

      const specialPerson = querySpecialPerson(personList);

      expect(specialPerson).to.deep.equal([]);
    });
  });

  context('after refactor', () => {
    it('should return the special person of the person list', () => {
      const personList = [{ energy: 100 }, { energy: 90 }, { energy: 10 }];

      const specialPerson = querySpecialPersonRefactored(personList);

      expect(specialPerson).to.deep.equal([{ energy: 100 }, { energy: 90 }]);
    });

    it('should return empty array if the list don`t have any special person', () => {
      const personList = [{ energy: 10 }];

      const specialPerson = querySpecialPersonRefactored(personList);

      expect(specialPerson).to.deep.equal([]);
    });
  });
});
