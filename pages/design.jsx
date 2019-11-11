import React, { useState } from 'react';
import { Typography, makeStyles, CircularProgress } from '@material-ui/core';
import { grey } from '@material-ui/core/colors';
import Layout from '../components/layout';

const useStyles = makeStyles(
  (theme) => ({
    iframeContainer: {
      position: 'relative',
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(3, 1),
        width: '100%',
        paddingTop: '100%',
      },
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(3, 5),
        width: '70%',
        paddingTop: '60%',
      },
    },
    iframe: {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 'none',
      '&.background': {
        backgroundColor: grey[100],
      },
    },
  }),
);

const Design = () => {
  const { iframeContainer, ...classes } = useStyles();
  const [loading, setLoading] = useState(true);
  return (
    <div>
      <Layout
        title="Design"
        next="bootstrapping"
      >
        <Typography variant="body1">
          For rapid prototyping, I use Figma. The prototype acts as a roadmap, speeding up development and avoiding unnecessary features. It is a living document, allowing me to continue testing and refining additional layout elements before implementing them.
        </Typography>
        <div className={iframeContainer}>
          {loading && (
            <div
              className={`${classes.iframe} background flex flex-center`}
            >
              <CircularProgress />
            </div>
          )}
          <iframe
            className={classes.iframe}
            title="Figma design prototype"
            onLoad={() => setLoading(false)}
            src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2F9DNoQZvUQzZ5p9E1858Kta%2FMe%3Fscaling%3Dscale-down-width%26node-id%3D4%253A2"
          />
        </div>
      </Layout>
    </div>
  );
};

export default Design;
