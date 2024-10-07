import { Box, Button, Card, Grid, Paper, TextField, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  const heading={fontSize:"2rem",fontWeight:"600"};
  const paperStyle={padding:"2rem",margin:"50px auto",borderRadius:"1rem",boxshadow:"10px 10px"}
  const row={display:"flex",marginTop:"1rem"}
  const btnstyle={marginTop:"1rem",fontSize:"0.5rem",fontWeight:"400",backgroundColor:"blue"}
  return (
    <div class="bg">
      <Grid align="center"  sx={{backgroundColor: "rgba(0,0,0,0.05)", backdropFilter: "blur(16px)", borderRadius:"1rem"}}>
      <div class="log">
        <Box>
      {/* <Paper style={paperStyle} sx={{width:{
        xs:"40vw",
        sm:"25vw",
        md:"20vw",
        lg:"15.5vw",
        xl:"15.5vw", 
      },
      height:"60vh"}}> */} 
      
      <Typography variant='h4' style={{heading}}>LOGIN</Typography>
      <form>
      <TextField sx={{label:{fontSize:"1rem",fontWeight:"550",color:'black'}}}style={row} label='Username' variant='outlined'></TextField><br></br><br></br>
        <TextField sx={{label:{fontSize:"1rem",fontWeight:"550" ,color:'black'}}}style={row} label='Password' variant='outlined'></TextField><br></br><br></br>
        <Link to='/userdash'>
        <Button  type='submit'variant='contained'>Submit</Button>
        </Link><br/><br/>
        Not a user?
        <Link to='/signin'> Sign up
        </Link>
      <br></br>
        <br></br><br></br>
        {/* <Link to='/admin'>
        <Button variant='contained'>Admin Login</Button></Link> */}
      </form>
      </Box>
      {/* </Paper> */}
      </div>
   </Grid>
      
    </div>
  )
}

export default Login
