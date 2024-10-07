import { Button, TextField } from '@mui/material'
import React from 'react'

const Admin = () => {
  return (
    <div>
    <h1>Welcome to Admin Login page !!!!</h1>
    <TextField label='Username' variant='filled'></TextField><br></br><br></br>
      <TextField label='Password' variant='filled'></TextField><br></br><br></br>
      <Button variant='contained'>Clear All</Button> &nbsp;
      <Button variant='contained'>Submit</Button>
  </div>
  )
}

export default Admin
