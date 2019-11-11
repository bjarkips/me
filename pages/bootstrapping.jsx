import React from 'react';
import { Typography } from '@material-ui/core';
import { cloudinary } from '../src/utils';
import Layout from '../components/layout';

const screenshotURL = cloudinary.url(
  'github.png',
  {
    width: 650,
    crop: 'fit',
    fetch_format: 'auto',
  },
);

const Bootstrapping = () => (
  <div>
    <Layout
      title="Bootstrapping"
      next="deployment"
    >
      <Typography variant="body1">
        After creating a git repository, I bootstrap the application using create-next-app. This sets up a proper directory structure and creates some basic utility scripts.
      </Typography>
      <img
        src={screenshotURL}
        alt="Github screenshot"
      />
    </Layout>
  </div>
);

export default Bootstrapping;
