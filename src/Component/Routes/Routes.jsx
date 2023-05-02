import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Register/Login/Login';
import Register from '../Register/Register';
export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/home",
        element: <Home></Home>
        
        },
       {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
      {
        path: "/blog",
        element: <Blog></Blog>
        
      },
    ],
  },
]);

