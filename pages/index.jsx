/* eslint-disable max-len */

import React from 'react';
import { Typography } from '@material-ui/core';
import Layout from '../components/layout';

const Home = () => (
  <div>
    <Layout
      title="Welcome!"
      next="tech-stack"
    >
      <Typography variant="body1">
        This website is a case study of itself. It is a personal project with the purpose of demonstrating my workflow and thought process in building a website from scratch.
      </Typography>
    </Layout>
  </div>
);

export default Home;
