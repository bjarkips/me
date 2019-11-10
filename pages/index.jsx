import React from 'react';
import Head from 'next/head';
import Layout from '../components/layout';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon_16x16.png" />
    </Head>
    <Layout title="Home">
      Hello
    </Layout>
  </div>
);

export default Home;
