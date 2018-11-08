export const getVolumeOfCuboid = (length, width, height) => {
  return length * width * height;
};

export const getVolumeOfCuboidRefactored = cuboid => {
  const { getLength, getWidth, getHeight } = cuboid;

  return getLength() * getWidth() * getHeight();
};
