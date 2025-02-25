import { AppBar, Avatar, Box, Button, Drawer, List, Toolbar, Typography } from '@mui/material';
import React,{useState} from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';
const Navuser = () => {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
      setOpen(newOpen);
    };
    const [op, setOp] = React.useState(false);
  
    const toggDraw = (newOp) => () => {
      setOp(newOp);
    };
  
    const DrawerList = (
      <Box sx={{ width: 250, color:"#00000000" }} role="presentation" onClick={toggleDrawer(false)}>
        <List sx={{backgroundColor:"#00000000" , color:"#00000000"}}>
            <ListItem>
            <Link to='/browser'>
              <ListItemButton> 
                <ListItemText primary="Browse Jobs" /><br/>
                </ListItemButton>
                </Link>
                </ListItem>
                <ListItem >
                <Link to='/viewappjob'>
                <ListItemButton> 
                <ListItemText primary="View Applied Jobs" /><br/>
                </ListItemButton>
                </Link>
                </ListItem>
                <ListItem>
                <Link to='/updateprof'>
                <ListItemButton> 
                <ListItemText primary="Update Profile" />
              </ListItemButton>
              </Link>
            </ListItem><br/>
            <ListItem >
                <Link to='/'>
                <ListItemButton> 
                <ListItemText primary="Log out" />
              </ListItemButton>
              </Link>
            </ListItem>
  
        </List>
      </Box>
    );
    const DrawerOut = (
      <Box sx={{ width: 250, color:"#00000000", display: { xs: 'none', sm: 'block' } }} role="presentation" onClick={toggDraw(false)}>
  <Typography variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>USER DASHBOARD</Typography>
  
      </Box>
    );
    return (
      <div>
        <AppBar position='static' sx={{backgroundColor:'#00000000'}}>
                <Toolbar >
                {/* <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            > */}
              
              <Button onClick={toggleDrawer(true)}><MenuIcon sx={{color:"white"}}/></Button>
        <Drawer open={open} onClose={toggleDrawer(false)} sx={{color:"#00000000"}}>
          {DrawerList}
        </Drawer>
            {/* </IconButton> */}
            
         
                <Typography align='left' variant='h6' component="div" sx={{ flexGrow: 1, color:"white"}}>USER DASHBOARD</Typography>
        
                <Button onClick={toggDraw(true)}><Avatar src="/broken-image.jpg" /></Button>
        <Drawer open={open} onClose={toggDraw(false)} sx={{color:"#00000000", align:"right"}}>
          {DrawerList}
        </Drawer>
                    </Toolbar>
            </AppBar>
      </div>
    )
}

export default Navuser
