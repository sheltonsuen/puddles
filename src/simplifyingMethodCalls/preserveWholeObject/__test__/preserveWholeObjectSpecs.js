import {
  getVolumeOfCuboid,
  getVolumeOfCuboidRefactored
} from '../preserveWholeObject';

describe('introduce parameter object', () => {
  context('before refactor', () => {
    it('should return the volume of the cuboid', () => {
      const cuboid = {
        getLength: () => 10,
        getWidth: () => 20,
        getHeight: () => 30
      };

      expect(
        getVolumeOfCuboid(
          cuboid.getLength(),
          cuboid.getHeight(),
          cuboid.getHeight()
        )
      ).to.be.equal(6000);
    });
  });

  context('after refactor', () => {
    it('should return the volume of the cuboid', () => {
      const cuboid = {
        getLength: () => 10,
        getWidth: () => 20,
        getHeight: () => 30
      };

      expect(getVolumeOfCuboidRefactored(cuboid)).to.be.equal(6000);
    });
  });
});
