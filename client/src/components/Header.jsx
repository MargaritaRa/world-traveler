// Header.jsx
import React, { useContext } from 'react';
import {Link} from 'react-router-dom';

export default function Header() {

  return (
    <header>
      <div className="header-content">

        <div className="logo" role="img">

            <Link className="logo-h1" to="./">

            <h1 >Around the World 🌎 </h1>

            </Link>

        </div>

      </div>
      
    </header>
  );
}