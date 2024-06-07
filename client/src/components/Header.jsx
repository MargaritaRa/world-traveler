// Header.jsx
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';
import NavBar from './NavBar';


export default function Header({ currentUser }) {

  return (
    <header className='header'>

        <Link className="logo-h1" to="./">

          <h1 >Around the World 🌎 </h1>

        </Link>
        <NavBar currentUser={currentUser}/>
      
    </header>
  );
}