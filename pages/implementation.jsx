import React from 'react';
import { Typography, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import Layout from '../components/layout';

const useStyles = makeStyles(
  (theme) => ({
    button: {
      margin: theme.spacing(1.5, 0),
    },
  }),
);

const Implementation = () => {
  const { button } = useStyles();
  return (
    <div>
      <Layout
        title="Implementation"
        next="thank-you"
      >
        <Typography variant="body1">
          By now, I hope to have demonstrated my ability to approach a web project from the bottom up. The source code behind this website should also serve as an example of my code patterns, which I learned by reading open-source style guides such as from the AirBnB and React teams.
        </Typography>
        <Typography variant="body1">
          I use an ESLint plugin in my code editor (currently VSCode) to enforce this style. Whenever I break a rule unexpectedly, I use the style guides to learn why it exists and how to fix it.
        </Typography>
        <Typography variant="body1">
          The general structure of this code draws from examples out of the Material UI documentation. At the time of writing, this library is well-maintained and up-to-date, With 52k GitHub stars and 750k weekly downloads from npm.
        </Typography>
        <Button
          component="a"
          href="https://github.com/bjarkips/me"
          target="_blank"
          rel="noopener noreferrer"
          className={button}
          variant="outlined"
          startIcon={<FontAwesomeIcon icon={faGithub} />}
        >
          Read the Code
        </Button>
      </Layout>
    </div>
  );
};

export default Implementation;
