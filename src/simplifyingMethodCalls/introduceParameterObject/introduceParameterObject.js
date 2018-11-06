export const getVolumeOfCuboid = (length, width, height) => {
  return length * width * height;
};

export const getVolumeOfCuboidRefactored = cuboid => {
  const { length, width, height } = cuboid;

  return length * width * height;
};
