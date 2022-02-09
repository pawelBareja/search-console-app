import React from 'react';
import { useGoogleLogin } from 'react-google-login';
import {useEmit} from 'eventrix'
import {GOOGLE_ACCOUNT_LOGGED_IN_SUCCESS} from '../actions/googleAccount'
import Button from '../components/Button/Button'
import LogoutIcon from '@mui/icons-material/Logout';

const clientId=process.env.REACT_APP_CLIENT_OAUTH_ID


export const Login = () => {

  const emit = useEmit()


  const loginUser = () => {
 emit(GOOGLE_ACCOUNT_LOGGED_IN_SUCCESS);
  }

  const onSuccess = (res) => {
    loginUser()
  };



  const onFailure = (res) => {
    console.log('Login failed: res:', res);
    alert(
      `Failed to login. 😢`
    );
  };

  const { signIn } = useGoogleLogin({
    onSuccess,
    onFailure,
    clientId,
    isSignedIn: true,
    accessType: 'offline',
  });


  return (
    <Button text={'Log in'} handleClick={signIn} type={"contained"} startIcon={<LogoutIcon />}/>
  );
}


