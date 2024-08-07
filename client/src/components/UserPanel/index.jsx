import React, { useContext } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useEffect } from 'react';
import CurrentUserContext from '../CurrentUserContext';

import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { red } from '@mui/material/colors';

const primary = red[900];
const defaultTheme = createTheme();

function UserPanel() {

  const { currentUser, setCurrentUser } = useContext(CurrentUserContext);

  useEffect(() => {
    // console.log('Current user in UserPanel:', currentUser);
  }, [currentUser]);

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(/image/vietnam10.jpg)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid
          item
          xs={12}
          sm={8}
          md={5}
          component={Paper}
          elevation={6}
          square
          sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}
        >
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: primary }}>
              <LockOutlinedIcon />
            </Avatar>
            {currentUser ? (
              <>
                <Typography component="h1" variant="h5">
                  Welcome, {currentUser.username}
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  className='country-list-link'
                  onClick={() => setCurrentUser(null)}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Typography component="h1" variant="h5">
                  Welcome, Guest
                </Typography>
                <Button
                  component={RouterLink}
                  to="/login"
                  variant="contained"
                  className='country-list-link'
                  sx={{ mt: 3, mb: 2 }}
                >
                  Login
                </Button>
                <Link component={RouterLink} to="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </>
            )}
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

export default UserPanel;
