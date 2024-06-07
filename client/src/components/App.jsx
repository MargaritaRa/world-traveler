import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
      <div>
      <Header />
      <Outlet />
      <Footer />
    </div> 
  );
}

export default App;
