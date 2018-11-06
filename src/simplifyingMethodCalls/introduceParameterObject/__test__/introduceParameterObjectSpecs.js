import {
  getVolumeOfCuboid,
  getVolumeOfCuboidRefactored
} from '../introduceParameterObject';

describe('introduce parameter object', () => {
  context('before refactor', () => {
    it('should return the volume of the cuboid', () => {
      expect(getVolumeOfCuboid(10, 20, 30)).to.be.equal(6000);
    });
  });

  context('after refactor', () => {
    it('should return the volume of the cuboid', () => {
      const cuboid = { length: 10, width: 20, height: 30 };

      expect(getVolumeOfCuboidRefactored(cuboid)).to.be.equal(6000);
    });
  });
});
