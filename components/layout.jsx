import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import cloudinaryCore from 'cloudinary-core';
import { Container, withStyles, Card } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Nav from './nav';
import ButtonNext from './buttonNext';
import { kebabToTitleCase } from '../src/utils';

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
      opacity: '40',
      gravity: 'auto:subject',
      fetch_format: 'auto',
    },
  )
})`;

const MainCard = withStyles(
  (theme) => ({
    root: {
      [theme.breakpoints.down('sm')]: {
        width: 300,
        padding: theme.spacing(5, 3),
      },
      [theme.breakpoints.between('sm', 'lg')]: {
        width: 560,
        padding: theme.spacing(10, 5),
      },
      [theme.breakpoints.up('lg')]: {
        width: 750,
        padding: theme.spacing(10, 6),
      },
    },
  }),
)(Card);

const useStyles = makeStyles(
  (theme) => ({
    background: {
      paddingTop: 64,
      height: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'fixed',
      backgroundSize: 'cover',
      [theme.breakpoints.down('sm')]: {
        backgroundImage: backgroundURL(600, '9:16'),
      },
      [theme.breakpoints.between('sm', 'xl')]: {
        backgroundImage: backgroundURL(1920),
      },
      [theme.breakpoints.up('xl')]: {
        backgroundImage: backgroundURL(),
      },
    },
    container: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
  }),
);

const Layout = ({ children, title, next }) => {
  const { background, container } = useStyles();
  return (
    <>
      <Head>
        <title>
          {title}
        </title>
      </Head>
      <Nav />
      <div className={background}>
        <Container
          maxWidth="xl"
          className={container}
        >
          <div className="flex flex-center full-height">
            <MainCard className="flex flex-center flex-column">
              {children}
            </MainCard>
          </div>
          {next && (
            <ButtonNext
              title={kebabToTitleCase(next)}
              href={`/${next}`}
            />
          )}
        </Container>
      </div>
      <style global jsx>
        {`
          html,
          body,
          div#__next,
          div#__next > div {
            height: 100%;
          }

          .flex {
            display: flex;
          }

          .flex-center {
            justify-content: center;
            align-items: center;
          }

          .flex-column {
            flex-direction: column;
          }

          .full-height {
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
  next: PropTypes.string,
};
Layout.defaultProps = {
  next: '',
};

export default Layout;
