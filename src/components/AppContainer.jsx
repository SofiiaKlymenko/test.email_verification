import * as React from 'react';
import './AppContainer.css';
import Box from '@mui/material/Box';
import {VerificationForm} from './VerificationForm';

export const AppContainer = () => {
  return <div className='app-container'>
    <Box className='app-countainer-box'>
      <h1>Email verification</h1>
      <VerificationForm />
    </Box>
  </div>;
};
