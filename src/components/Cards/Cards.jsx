import React from 'react';
import { Card, CardContent, Typography, Grid } from '@material-ui/core';

const Cards = (props)=>{
  console.log(props);

  return(
    <div>
      <Grid container spacing={10} justify="center">
        <Grid item component={Card}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Infected
              </Typography>
              <Typography variant="h5" component="h2">
                Real Data
              </Typography>
              <Typography color="textSecondary">
                Real Date
              </Typography>
              <Typography variant="body2" component="p">
                Number of active cases of COVID-19.
              </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Recovered
              </Typography>
              <Typography variant="h5" component="h2">
                Real Data
              </Typography>
              <Typography color="textSecondary">
                Real Date
              </Typography>
              <Typography variant="body2" component="p">
                Number of recoveries from COVID-19.
              </Typography>
            </CardContent>
        </Grid>

        <Grid item component={Card}>
          <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Deaths
              </Typography>
              <Typography variant="h5" component="h2">
                Real Data
              </Typography>
              <Typography color="textSecondary">
                Real Date
              </Typography>
              <Typography variant="body2" component="p">
                Number of deaths caused by COVID-19.
              </Typography>
            </CardContent>
        </Grid>
      </Grid>
    </div>
  );
}

export default Cards;