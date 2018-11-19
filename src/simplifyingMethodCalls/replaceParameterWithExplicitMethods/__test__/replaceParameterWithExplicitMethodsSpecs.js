import {
  setValue,
  setHeight,
  setWidth
} from '../replaceParameterWithExplicitMethods';

describe('replaceParameterWithExplicitMethods', () => {
  context('before refactoring', () => {
    it('should set the height of the box', () => {
      const box = {};

      setValue(box, 'HEIGHT', 20);

      expect(box.height).to.be.equal(20);
    });

    it('should set the width of the box', () => {
      const box = {};

      setValue(box, 'WIDTH', 10);

      expect(box.width).to.be.equal(10);
    });
  });

  context('after refactoring', () => {
    it('should set the height of the box', () => {
      const box = {};

      setHeight(box, 20);

      expect(box.height).to.be.equal(20);
    });

    it('should set the width of the box', () => {
      const box = {};

      setWidth(box, 10);

      expect(box.width).to.be.equal(10);
    });
  });
});
