import { Box, Button, FormControl, FormControlLabel, FormLabel, Grid, Radio, RadioGroup, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Signin = () => {
  return (
<div class="back">
      <div class="sign" >
        <Grid sx={{backgroundColor: "rgba(0,0,0,0.05)", backdropFilter: "blur(16px)", borderRadius:"1rem"}}>
      <Box
      component="form"
      noValidate
      autoComplete="off" >
      
      <Typography variant='h4'>REGISTER</Typography><br/>
        {/* <h1>Welcome to Sign in page !!!!</h1> */}
        <TextField label='Full Name' variant='filled'></TextField><br></br><br></br>
        <TextField label='Email' variant='filled'></TextField><br></br><br></br>
        <TextField label='Phone Number' variant='filled'></TextField><br></br><br></br>
        <TextField label='Password' variant='filled'></TextField><br></br><br></br>
        {/* <FormControl>
      <FormLabel id="">Occupation</FormLabel>
      <RadioGroup
        aria-labelledby="demo-radio-buttons-group-label"
        defaultValue="None"
        name="radio-buttons-group"
      >
        <FormControlLabel value="Student" control={<Radio />} label="Student" />
        <FormControlLabel value="Recruiter" control={<Radio />} label="Recruiter" />
        <FormControlLabel value="Other" control={<Radio />} label="Other" />
      </RadioGroup>
    </FormControl> */}
    <br></br>
    
    <Link to='/login'>
        <Button variant='contained'>Submit</Button></Link>
        <br/><br/>
        Already a user?
        <Link to='/login'>Login
        </Link><br></br><br></br>
        <Link to='/'>
                      <Button variant='contained'>Home</Button></Link>&nbsp;
        
        </Box>
        </Grid>
        </div>
    </div>
  )
}

export default Signin
