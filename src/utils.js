import cloudinaryCore from 'cloudinary-core';

const cloudinary = new cloudinaryCore.Cloudinary({
  cloud_name: 'dha1esy3y',
  secure: true,
});

const responsiveProps = (image, overrideWidths, config) => {
  const defaultParams = {
    crop: 'fit',
    fetch_format: 'auto',
  };
  const configParams = {
    ...defaultParams,
    ...config,
  };
  const widths = overrideWidths || [
    {
      breakpoint: 600,
      width: 280,
    },
    {
      breakpoint: 1280,
      width: 500,
    },
    { width: 650 },
  ];
  const srcset = widths.map(
    ({ width }) => {
      const src = cloudinary.url(
        image,
        {
          ...configParams,
          width,
        },
      );
      return `${src} ${width}w`;
    },
  );
  const sizes = widths.map(
    ({ width, breakpoint }) => (
      breakpoint
        ? `(max-width: ${breakpoint}px) ${width}px`
        : `${width}px`
    ),
  );
  const src = cloudinary.url(
    image,
    {
      ...configParams,
      width: widths.slice(-1),
    },
  );
  return {
    srcset,
    sizes,
    src,
  };
};

const capitalize = ([first, ...rest]) => `${first.toUpperCase()}${rest.join('')}`;

const kebabToTitleCase = (str) => str
  .split('-')
  .map(capitalize)
  .join(' ');

export {
  cloudinary,
  responsiveProps,
  capitalize,
  kebabToTitleCase,
};
