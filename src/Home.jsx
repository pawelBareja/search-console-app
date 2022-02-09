import React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import Main from './pages/Main'
import LoginGate from './pages/LoginGate'
import { useEventrixState } from 'eventrix';

export const Home = () => {

    const [authorized] = useEventrixState('user.authorized')
        return (
            <React.Fragment>
              <CssBaseline />
              <Container maxWidth="sm">
               {authorized ? <Main/> : <LoginGate/>}
              </Container>
            </React.Fragment>
          );
};



