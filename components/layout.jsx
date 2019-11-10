import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import cloudinaryCore from 'cloudinary-core';
import { Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Nav from './nav';

const cloudinary = new cloudinaryCore.Cloudinary({
  cloud_name: 'dha1esy3y',
  secure: true,
});

const backgroundURL = (
  width = undefined,
  aspectRatio = '16:9',
) => `url(${
  cloudinary.url(
    'background.jpg',
    {
      width,
      aspect_ratio: aspectRatio,
      crop: 'lfill',
      gravity: 'auto:subject',
      fetch_format: 'auto',
    },
  )
})`;

const useStyles = makeStyles(
  (theme) => ({
    background: {
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: backgroundURL(600, '2:3'),
      },
      [theme.breakpoints.between('sm', 'xl')]: {
        backgroundImage: backgroundURL(1920),
      },
      [theme.breakpoints.up('xl')]: {
        backgroundImage: backgroundURL(),
      },
    },
  }),
);

const Layout = ({ children, title }) => {
  const { background } = useStyles();
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <Nav />
      <Box className={background}>
        {children}
      </Box>
      <style global jsx>
        {`
          .flex {
            display: flex;
          }
          html,
          body,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}
      </style>
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};

export default Layout;
