import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import {
  Container,
  withStyles,
  Card,
  Typography,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Nav from './nav';
import ButtonNext from './buttonNext';
import { kebabToTitleCase, cloudinary } from '../src/utils';

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
        padding: theme.spacing(8, 5),
      },
      [theme.breakpoints.up('lg')]: {
        width: 750,
        padding: theme.spacing(5, 6),
      },
    },
  }),
)(Card);

const useStyles = makeStyles(
  (theme) => ({
    background: {
      [theme.breakpoints.up('lg')]: {
        height: '100%',
      },
      paddingTop: 64,
      minHeight: '100%',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundAttachment: 'scroll',
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
      [theme.breakpoints.down('lg')]: {
        minHeight: 'calc(100vh - 64px)',
      },
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    mainCard: {
      marginTop: theme.spacing(3),
      '& h4': {
        marginBottom: theme.spacing(3),
        fontWeight: 'bold',
      },
      '& p': {
        alignSelf: 'start',
        '&:not(:last-child)': {
          marginBottom: theme.spacing(3),
        },
      },
    },
  }),
);

const Layout = ({ children, title, next }) => {
  const {
    background,
    container,
    mainCard,
  } = useStyles();
  return (
    <>
      <Head>
        <title>
          {`${title} - Bjarki`}
        </title>
      </Head>
      <Nav />
      <div className={background}>
        <Container
          maxWidth="xl"
          className={container}
        >
          <div className="flex flex-center flex-grow">
            <MainCard className={`${mainCard} flex flex-center flex-column`}>
              <Typography variant="h4">
                {title}
              </Typography>
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

          .flex-grow {
            flex-grow: 1;
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
