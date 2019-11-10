const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

const kebabToTitleCase = (str) => str
  .split('-')
  .map(capitalize)
  .join(' ');

export {
  capitalize,
  kebabToTitleCase,
};
