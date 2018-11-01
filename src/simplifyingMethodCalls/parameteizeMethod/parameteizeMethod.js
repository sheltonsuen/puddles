export const querySpecialPerson = personList => {
  const fullfilledPerson = findFullfilledPerson(personList);
  const wellPerson = findWellPerson(personList);

  return [...fullfilledPerson, ...wellPerson];
};

const findFullfilledPerson = personList => {
  const fullfilledPserson = [];
  personList.forEach(person => {
    if (person.energy === 100) {
      fullfilledPserson.push(person);
    }
  });

  return fullfilledPserson;
};

const findWellPerson = personList => {
  const wellPerson = [];
  personList.forEach(person => {
    if (person.energy === 90) {
      wellPerson.push(person);
    }
  });

  return wellPerson;
};

export const querySpecialPersonRefactored = personList => {
  const fullfilledPerson = findPersonWithFixedEnergy(personList, 100);
  const wellPerson = findPersonWithFixedEnergy(personList, 90);

  return [...fullfilledPerson, ...wellPerson];
};

const findPersonWithFixedEnergy = (personList, energy) => {
  const personWithFixedEnergy = [];
  personList.forEach(person => {
    person.energy === energy && personWithFixedEnergy.push(person);
  });

  return personWithFixedEnergy;
};
