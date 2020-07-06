import React from 'react'
import {Card, CardContent, Typography, Grid} from '@material-ui/core';

import styles from './Cards.module.css';
import CountUp from 'react-countup';
import Cx from 'classnames';

const Cards = ({data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if(!confirmed){
      return 'Loading ... .';
  }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card} xs={12} md={3} className={Cx(styles.Card, styles.infected)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>confirmed</Typography>
                    <Typography variant="h5">
                        <CountUp start={0} end={confirmed.value} duration={2.5} seprator="," />
                    </Typography>
    <Typography colr="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">number of acitve case of covit 19</Typography>
                    </CardContent>

                </Grid>

                <Grid item component={Card}xs={12} md={3} className={Cx(styles.Card, styles.recovered)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={recovered.value} duration={2.5} seprator="," />

                    </Typography>
                    <Typography colr="textSecondary">Real Data</Typography>
                    <Typography variant="body2">number of recovered case from covit 19</Typography>
                    </CardContent>

                </Grid>


                <Grid item component={Card} xs={12} md={3} className={Cx(styles.Card, styles.deaths)}>
                    <CardContent>
                    <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                    <Typography variant="h5">
                    <CountUp start={0} end={deaths.value} duration={2.5} seprator="," />

                    </Typography>
                    <Typography colr="textSecondary">Real Data</Typography>
                    <Typography variant="body2">number of deaths caused by covit 19</Typography>
                    </CardContent>

                </Grid>
            </Grid>
        </div>
    )
}

export default Cards
