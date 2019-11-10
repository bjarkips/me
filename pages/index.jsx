/* eslint-disable max-len */

import React from 'react';
import Head from 'next/head';
import { Typography, makeStyles } from '@material-ui/core';
import Layout from '../components/layout';

const useStyles = makeStyles({
  header: {
    marginBottom: 50,
    fontWeight: 'regular',
  },
});

const Home = () => {
  const { header } = useStyles();
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Layout
        title="Home"
        next="tech-stack"
      >
        <Typography
          variant="h2"
          className={header}
        >
          Welcome!
        </Typography>
        <Typography variant="body1">
          This website is a case study of itself. It is a personal project with the purpose of demonstrating my workflow and thought process in building a website from scratch.
        </Typography>
      </Layout>
    </div>
  );
};

export default Home;
