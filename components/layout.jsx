import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { Box } from '@material-ui/core';

import Nav from './nav';

const Layout = ({ children, title }) => (
  <>
    <Head>
      <title>
        {title}
      </title>
    </Head>
    <Nav />
    <Box>
      {children}
    </Box>
    <style global jsx>
      {`
        .flex {
          display: flex;
        }
      `}
    </style>
  </>
);
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
