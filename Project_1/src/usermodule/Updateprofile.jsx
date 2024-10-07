import { TextField, Typography } from '@mui/material'
import React from 'react'
import Navuser from './Navuser'

const Updateprofile = () => {
  return (
    <div class="upd">
        <div class="usernavv">
      <Navuser></Navuser>
      <br/>
      <Typography variant='h4'>UPDATE</Typography><br/><br/>
        <TextField label='First Name' variant='filled'></TextField><br></br><br/>
        <TextField label='Middle Name' variant='filled'></TextField><br/><br/>
        <TextField label='Last Name' variant='filled'></TextField><br></br><br/>
        <TextField label='DOB' variant='filled'></TextField><br></br><br/>
        <TextField label='Age' variant='filled'></TextField><br/><br/>
        <TextField label='Mobile Number' variant='filled'></TextField><br/><br/>
        <TextField label='Email' variant='filled'></TextField><br/><br/>
        <TextField label='Profession' variant='filled'></TextField><br/><br/>
        <TextField label='Experience' variant='filled'></TextField><br/><br/>
        </div>
    </div>
  )
}

export default Updateprofile
