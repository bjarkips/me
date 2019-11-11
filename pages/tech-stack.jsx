import React from 'react';
import {
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import Layout from '../components/layout';

const useStyles = makeStyles({
  logo: {
    height: 24,
  },
  logoContainer: {
    marginRight: 24,
  },
  list: {
    paddingTop: 24,
  },
  bold: {
    fontWeight: 'bold',
  },
});

const TechStack = () => {
  const {
    logoContainer,
    list,
    bold,
    ...classes
  } = useStyles();

  const technologies = [
    {
      name: 'React.js',
      description: 'This website is a brief demonstration of my familiarity with React.',
      logo: '/react.svg',
    },
    {
      name: 'Next.js',
      description: 'Speed is extremely important for increasing user engagement on any website. Next.js gives us server-side rendering with minimal setup.',
      logo: '/next.svg',
    },
    {
      name: 'Material UI',
      description: 'As an amateur designer, the Material design scheme gives me rigid guidelines to follow, prioritizing intuitive layouts. Material UI provides basic React components styled according to Material design.',
      logo: '/mui.svg',
    },
    {
      name: 'Netlify',
      description: 'A solid hosting option which connects directly to my GitHub repository with minimal setup.',
      logo: '/netlify.svg',
    },
    {
      name: 'Cloudinary',
      description: 'Loading HD images can be slow and expensive. This image hosting API handles compression, caching, and resizing out of the box.',
      logo: '/cloudinary.svg',
    },
  ].map(
    ({ name, description, logo }) => (
      <ListItem key={name}>
        <ListItemIcon
          className={`flex flex-center ${logoContainer}`}
        >
          <img
            className={classes.logo}
            src={logo}
            alt=""
          />
        </ListItemIcon>
        <ListItemText>
          <Typography
            component="span"
            variant="body1"
            className={bold}
          >
            {`${name}. `}
          </Typography>
          <Typography
            component="span"
            variant="body1"
          >
            {description}
          </Typography>
        </ListItemText>
      </ListItem>
    ),
  );

  return (
    <div>
      <Layout
        title="Tech Stack"
        next="design"
      >
        <Typography variant="body1">
          In order to speed up development, I have chosen my personal favourite tools for the job:
        </Typography>
        <List
          className={list}
        >
          {technologies}
        </List>
      </Layout>
    </div>
  );
};

export default TechStack;
