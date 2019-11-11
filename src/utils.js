import cloudinaryCore from 'cloudinary-core';

const cloudinary = new cloudinaryCore.Cloudinary({
  cloud_name: 'dha1esy3y',
  secure: true,
});

const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

const kebabToTitleCase = (str) => str
  .split('-')
  .map(capitalize)
  .join(' ');

export {
  cloudinary,
  capitalize,
  kebabToTitleCase,
};
