import React from 'react';
import Box from '@mui/material/Box';
import { Login } from '../../services/Logout'
import { Grid } from '@mui/material';

export const LoginGate = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid><h1>Log in</h1></Grid>
            <Grid><p>You need to log in to your Google Account to access search console data</p></Grid>
            <Grid><Login/></Grid>

        </Grid>
    );
};

