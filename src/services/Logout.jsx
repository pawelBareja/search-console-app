import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import {useEmit} from 'eventrix'
import {GOOGLE_ACCOUNT_LOGGED_OUT_SUCCESS} from '../actions/googleAccount'
import Button from '../components/Button/Button'
import LoginIcon from '@mui/icons-material/Login';

const clientId=process.env.REACT_APP_CLIENT_OAUTH_ID


export const Logout = () => {

  const emit = useEmit()


  const logoutUser = () => {
 emit(GOOGLE_ACCOUNT_LOGGED_OUT_SUCCESS);
  }

  const onLogoutSuccess = () => {
    logoutUser()
  };

  const onFailure = () => {
    console.log('Handle failure cases');
  };



  const { signOut } = useGoogleLogout({
    clientId,
    onLogoutSuccess,
    onFailure,
  });


  return (
    <Button text={'Log out'} handleClick={signOut} type={"outlined"} startIcon={<LoginIcon />}/>
  );
}


