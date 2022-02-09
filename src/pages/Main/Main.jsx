import React from 'react';
import { Grid } from '@mui/material';
import {Logout} from '../../services/Login'

export const Main = () => {
    return (
        <Grid
            container
            direction="column"
            justifyContent="center"
            alignItems="center"
        >
            <Grid><h1>Main app</h1></Grid>
            <Grid><Logout/></Grid>
       
 
        </Grid>
    );
};

