import React from 'react';
import Link from 'next/link';
import {
  makeStyles,
  AppBar,
  Toolbar,
  Container,
} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import Logo from '../public/logo_white.svg';

const useStyles = makeStyles({
  toolbar: {
    justifyContent: 'space-between',
  },
  github: {
    fontSize: 32,
    color: 'white',
  },
});

const Nav = () => {
  const { toolbar, github } = useStyles();
  return (
    <AppBar>
      <Container maxWidth="xl">
        <Toolbar className={toolbar}>
          <Link
            href="/"
          >
            <a>
              <Logo />
            </a>
          </Link>
          <a
            href="https://github.com/bjarkips/me"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              className={github}
              icon={faGithub}
            />
          </a>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Nav;
