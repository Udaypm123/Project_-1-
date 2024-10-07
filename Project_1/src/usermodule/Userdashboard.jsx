import React from 'react'
import Navuser from './Navuser'
import CheckIcon from '@mui/icons-material/Check';
import { Alert, Stack } from '@mui/material';

const Userdashboard = () => {
  return (
    <div class="user">
    <div class="usernavv">
    <Navuser></Navuser>
    <Stack sx={{ width: '100%'}} spacing={2}>
      <Alert variant="outlined" severity="success">
        You have succesfully logged in
      </Alert>
      </Stack>
    </div>
  </div>
  )
}

export default Userdashboard
