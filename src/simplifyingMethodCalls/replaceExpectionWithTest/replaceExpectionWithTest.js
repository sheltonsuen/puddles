export const getAverage = values => {
  try {
    return values.reduce((sum, value) => (sum += value)) / values.length;
  } catch (error) {
    return -1;
  }
};

export const getAverageRefactored = values => {
  if (values.length === 0) {
    return -1;
  }

  return values.reduce((sum, value) => (sum += value)) / values.length;
};
