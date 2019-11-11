import React from 'react';
import { Typography, Button, useTheme, useMediaQuery } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import Layout from '../components/layout';

const useStyles = makeStyles(
  (theme) => ({
    button: {
      minWidth: 100,
      [theme.breakpoints.up('sm')]: {
        margin: theme.spacing(2, 1.5),
      },
      [theme.breakpoints.down('sm')]: {
        margin: theme.spacing(2, 1),
      },
    },
    caption: {
      opacity: 0.6,
      fontSize: 14,
    },
  }),
);

const ThankYou = () => {
  const { button, caption } = useStyles();
  const theme = useTheme();
  const isSmall = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <div>
      <Layout
        title={`Thank you${!isSmall ? ' for your time' : ''}`}
        next=""
      >
        <Typography
          variant="caption"
          className={caption}
        >
          Ready to get in touch?
        </Typography>
        <div className="flex flex-center">
          <Button
            component="a"
            href="https://www.linkedin.com/in/bjarkips/"
            target="_blank"
            rel="noopener noreferrer"
            className={button}
            variant="outlined"
            startIcon={<FontAwesomeIcon icon={faLinkedin} />}
          >
            { `${!isSmall ? 'View my ' : ''}Profile` }
          </Button>
          <Button
            component="a"
            href="https://docs.google.com/document/d/1FEyXf8g8Mgt7GPn9HVysqBBfFK96GT5vPX96PSGa7QQ/edit?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className={button}
            variant="contained"
            color="primary"
            startIcon={<FontAwesomeIcon icon={faExternalLinkAlt} />}
          >
            { `${!isSmall ? 'View my ' : ''}CV` }
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export default ThankYou;
