import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';
import CountUp from 'react-countup';
import { useCardsStyles } from '../../styles';
import cx from 'classnames';
//import classes from './Cards.module.css';

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  const classes = useCardsStyles();
  if (!confirmed) {
    return 'Loading......';
  }
  return (
    <div className={classes.container}>
      <Grid container spacing={3} justify="center">
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.confirmed)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Κρούσματα
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Αριθμός κρουσμάτων από τον COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.recovered)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Αναρρώσεις
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Αριθμός αναρρώσεων από τον COVID-19</Typography>
          </CardContent>
        </Grid>
        <Grid
          item
          component={Card}
          xs={12}
          md={3}
          className={cx(classes.card, classes.deaths)}
        >
          <CardContent>
            <Typography color="textSecondary" gutterBottom>
              Θάνατοι
            </Typography>
            <Typography variant="h5">
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
            </Typography>
            <Typography color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2">Αριθμός θανάτων από τον COVID-19</Typography>
          </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
