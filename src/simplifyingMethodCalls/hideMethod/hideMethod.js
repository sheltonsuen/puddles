export const attackDoubleEleven = () => isWithDoubleEleven();

export const isWithDoubleEleven = () => {
  const now = new Date();
  const doubleEleven = 11;

  return now.getMonth() + 1 === doubleEleven && now.getDate() === doubleEleven;
};

export const attackDoubleElevenRefactored = () => isWithDoubleElevenRefactored();

const isWithDoubleElevenRefactored = () => {
  const now = new Date();
  const doubleEleven = 11;

  return now.getMonth() + 1 === doubleEleven && now.getDate() === doubleEleven;
};
