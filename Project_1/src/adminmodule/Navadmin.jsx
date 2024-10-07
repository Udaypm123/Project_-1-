import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navadmin = () => {
  return (
    <div>
    <AppBar position='static'>
            <Toolbar >
            <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1}}>WELCOME HOME</Typography>
            <Link to='/admindash'>
                    <Button variant='contained'>HOME</Button></Link>&nbsp;
                    <Link to='/fulluser'>
                    <Button variant='contained'>LISTS OF USER APPLICATION</Button></Link>&nbsp;
                    <Link to='/manjob'>
                    <Button variant='contained'>MANAGE JOB</Button></Link>&nbsp;
            </Toolbar>
        </AppBar>
  </div>
  )
}

export default Navadmin
