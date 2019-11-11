import React from 'react';
import PropTypes from 'prop-types';
import { Fab } from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import { withStyles, makeStyles } from '@material-ui/styles';

const WideFab = withStyles(
  (theme) => ({
    root: {
      minHeight: 48,
      [theme.breakpoints.down('sm')]: {
        width: 240,
        marginBottom: theme.spacing(6),
        marginTop: theme.spacing(3),
      },
      [theme.breakpoints.up('sm')]: {
        width: 280,
        marginBottom: 100,
        marginTop: theme.spacing(3),
      },
    },
  }),
)(Fab);

const useStyles = makeStyles({
  icon: {
    marginLeft: 15,
  },
});

const ButtonNext = ({ title, href }) => {
  const { icon } = useStyles();
  return (
    <Link
      href={href}
      passHref
    >
      <WideFab
        component="a"
        variant="extended"
        color="secondary"
      >
        {title}
        <FontAwesomeIcon
          className={icon}
          icon={faArrowRight}
        />
      </WideFab>
    </Link>
  );
};
ButtonNext.propTypes = {
  title: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default ButtonNext;
