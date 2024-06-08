// Header.jsx
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import CurrentUserContext from './CurrentUserContext';
import NavBar from './NavBar';

function Header() {

  const { currentUser, logout } = useContext(CurrentUserContext);

  return (
    <header className='header'>

        <Link className="logo-h1" to="./">
          <h1 >Around the World 🌎 </h1>
        </Link> 
        <NavBar currentUser={currentUser} logout={logout}/>
    </header>
  );
}

export default Header