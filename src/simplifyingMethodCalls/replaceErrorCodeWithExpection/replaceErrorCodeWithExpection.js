export const getMoneyTotal = person => {
  if (person.isLocked) {
    return -1;
  }

  return person.money;
};

export const getMoneyTotalRefactored = person => {
  if (person.isLocked) {
    throw new Error('person is locked');
  }

  return person.money;
};
