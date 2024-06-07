// App.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function App() {

  const location = useLocation();

  const isHomePage = location.pathname === '/';

  return (
    <Elements stripe={stripePromise}>
    <div className={`app ${isHomePage ? 'home-page' : ''}`}>
      <Header />
      <Outlet />
      <Footer />
    </div> 
    </Elements>
  );
}

export default App;
