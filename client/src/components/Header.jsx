// Header.jsx
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import CurrentUserContext from './CurrentUserContext';
import NavBar from './NavBar';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';

function Header() {

  const { currentUser, logout } = useContext(CurrentUserContext);

  return (
    <header className='header-container'>

        <Link className="logo-h1" to="./">
          <h1 ><TravelExploreIcon/> Around the World.</h1>
        </Link> 
        <NavBar currentUser={currentUser} logout={logout}/>
    </header>
  );
}

export default Header