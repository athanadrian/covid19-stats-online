import React from 'react';
import { useFooterStyles } from '../styles';
import { Typography, Hidden } from '@material-ui/core';

const Footer = () => {
  const classes = useFooterStyles();

  return (
    <>
      <footer className={classes.container}>
        <Typography component="p" align="right">
          Copyright © {new Date().getFullYear()}.{' '}
          <a href="https://atana.site" className={classes.link}>
            AtanaDev
          </a>{' '}
          <Hidden xsDown>
            All rights reserved.{' '}
            <Hidden smDown>
              <span>
                <b>Version</b> 1.0.0
              </span>
            </Hidden>
          </Hidden>
        </Typography>
      </footer>

      {/* <Hidden sm>
        <footer className={classes.container}>
          <Typography component="body2" align="rightleft">
            Copyright ©
            <a href="https://atana.site" className={classes.link}>
              AtanaDev
            </a>
          </Typography>
        </footer>
      </Hidden> */}
    </>
  );
};

export default Footer;
