import React from 'react';
import { Typography } from '@material-ui/core';
import { cloudinary } from '../src/utils';
import Layout from '../components/layout';

const screenshotURL = cloudinary.url(
  'deploy.png',
  {
    width: 650,
    crop: 'fit',
    fetch_format: 'auto',
  },
);

const Deployment = () => (
  <div>
    <Layout
      title="Deployment"
      next="image-hosting"
    >
      <Typography variant="body1">
        After bootstrapping, I log on to Netlify and set up continuous deployment, HTTPS, and a global CDN with a few clicks. Since I set the netlify build function to yarn build && yarn export, the first deployment fails as no export function has been defined.
      </Typography>
      <Typography variant="body1">
        I add the export script and push to master. This triggers a build on Netlify, which succeeds. The site is now live.
      </Typography>
      <img
        src={screenshotURL}
        alt="Netlify deployments screenshot"
      />
    </Layout>
  </div>
);

export default Deployment;
