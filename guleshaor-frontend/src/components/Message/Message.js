import { Alert, AlertTitle } from '@mui/material';
import React from 'react'
import "./Message.scss";
const Message = ({children}) => {
  return (
    <div className='containerMessage'>
    <Alert variant="filled" severity="error">
    <AlertTitle>Error</AlertTitle>
    {children}
    </Alert>
    </div>
  )
}

export default Message