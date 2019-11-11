import React from 'react';
import { Typography } from '@material-ui/core';
import { cloudinary, responsiveProps } from '../src/utils';
import Layout from '../components/layout';

const { srcset, sizes, src } = responsiveProps('github.png');

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
        srcSet={srcset}
        sizes={sizes}
        src={src}
        alt="Github screenshot"
      />
    </Layout>
  </div>
);

export default Bootstrapping;
