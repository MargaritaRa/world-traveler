// React //
import ReactDOM from 'react-dom/client'
import React from 'react';


// Components //
import App from './components/App.jsx'
import Favorites from './components/Favorites.jsx'
import Newsletter from './components/Newsletter.jsx'
import DesContainer from './components/DesContainer.jsx';
import ErrorPage  from './components/ErrorPage.jsx'
import Home from './components/Home.jsx'

//  CSS
import './index.css'

// React-Router-dom //
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { CurrentUserProvider } from './components/CurrentUserContext.jsx';
import UserPanel from './components/UserPanel/index.jsx';



// Frontend Routes //
const routes = [
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <ErrorPage />
      },
      {
        path: 'destinations',
        element: <DesContainer />,
        errorElement: <ErrorPage />
      },
      {
        path: 'favorites',
        element: <Favorites />,
        errorElement: <ErrorPage />
      },
      {
        path: 'newsletter',
        element: <Newsletter />,
        errorElement: <ErrorPage />
      },
      {
        path: 'userpanel',
        element: <UserPanel />,
        errorElement: <ErrorPage />
      }
    ]
  }
];

// Router //
const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <CurrentUserProvider>
      <RouterProvider router={router} />
    </CurrentUserProvider>
  </React.StrictMode>
)
