import React from 'react';
import { Typography } from '@material-ui/core';
import { cloudinary } from '../src/utils';
import Layout from '../components/layout';

const backgroundURL = cloudinary.url(
  'background.png',
  {
    width: 400,
    crop: 'fit',
    fetch_format: 'auto',
  },
);

const ImageHosting = () => (
  <div>
    <Layout
      title="Image Hosting"
      next="implementation"
    >
      <Typography variant="body1">
        During the design phase, I have chosen an HD image to use as a background. The Netlify CDN is ideal for static site hosting, not so much for large media (it can integrate with Git LFS but I haven’t tried this myself).
      </Typography>
      <Typography variant="body1">
        With Cloudinary, I can store my large images and automatically fetch them in the optimal format for each client. Cloudinary stores multiple versions of each image so each transformation is performed only once and cached afterwards.
      </Typography>
      <Typography variant="body1">
        The background image I have chosen is by Leone Venter on Unsplash.
      </Typography>
      <img
        src={backgroundURL}
        alt="Netlify deployments screenshot"
      />
    </Layout>
  </div>
);

export default ImageHosting;
