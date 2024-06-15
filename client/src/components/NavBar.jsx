import { Link} from 'react-router-dom'
import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import AppsIcon from '@mui/icons-material/Apps';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined'; //login icon
import PublicOutlinedIcon from '@mui/icons-material/PublicOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

export default function NavBar({ currentUser, logout }){

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
                {currentUser && (
                    <>
                        <ListItem>
                            <ListItemText primary={`Welcome, ${currentUser.username}`} />
                        </ListItem>
                        <ListItem disablePadding>
                            <ListItemButton onClick={logout}>
                                <ListItemIcon>
                                    <PermIdentityOutlinedIcon />
                                </ListItemIcon>
                                <ListItemText primary="Log Out" />
                            </ListItemButton>
                        </ListItem>
                    </>
                )}
            <Divider />
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
          </List>
        </Box>
      );
    

    return(
        
        <div className='nav-container'>
            <React.Fragment>
                <AppsIcon onClick={
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