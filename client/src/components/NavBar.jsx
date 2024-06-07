import {NavLink, Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'; //login icon
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export default function NavBar({ currentUser }){

    const [state, setState] = React.useState({
        top: false,
        left: false,
        bottom: false,
        right: false,
      });
    
    const toggleDrawer = (anchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
          return;
        }
    
        setState({ ...state, [anchor]: open });
      };

      const list = (anchor) => (
        <Box
          sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
          role="presentation"
          onClick={toggleDrawer(anchor, false)}
          onKeyDown={toggleDrawer(anchor, false)}
        >
          <List>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/">
                    <ListItemIcon>
                        <HomeOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Home"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/destinations">
                    <ListItemIcon>
                        <PublicOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Destinations"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/favorites">
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Favorites"}/>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component={Link} to="/newsletter">
                    <ListItemIcon>
                        <ArticleOutlinedIcon />
                    </ListItemIcon>
                    <ListItemText primary={"Newsletter"}/>
                </ListItemButton>
            </ListItem>
            <Divider />
            {!currentUser && (
                    <ListItem disablePadding>
                        <ListItemButton component={Link} to="/userpanel">
                            <ListItemIcon>
                                <PermIdentityOutlinedIcon />
                            </ListItemIcon>
                            <ListItemText primary="Login/Signup" />
                        </ListItemButton>
                    </ListItem>
                )}
          </List>
        </Box>
      );
    

    return(
        
        <div>
            {/* <div>
                {['left', 'right', 'top', 'bottom'].map((anchor) => (
                    <React.Fragment key={anchor}>
                    <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
                    <Drawer
                        anchor={anchor}
                        open={state[anchor]}
                        onClose={toggleDrawer(anchor, false)}
                    >
                        {list(anchor)}
                    </Drawer>
                    </React.Fragment>
                ))}
            </div> */}
            <React.Fragment>
                <MenuIcon onClick={
                    toggleDrawer('right', true)
                } />

                    <Drawer
                        anchor={"right"}
                        open={state["right"]}
                        onClose={toggleDrawer("right", false)}
                    >
                        {list("right")}
                    </Drawer>
            </React.Fragment>
        </div>
    )
}