export const setValue = (box, name, value) => {
  if (name === 'HEIGHT') {
    box.height = value;
    return;
  }

  if (name === 'WIDTH') {
    box.width = value;
    return;
  }
};

export const setHeight = (box, height) => {
  box.height = height;
};

export const setWidth = (box, width) => {
  box.width = width;
};
