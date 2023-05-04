import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import AllChefs from '../Pages/AllChefs/AllChefs';
import Blog from '../Pages/Blog/Blog';
import Home from '../Pages/Home/Home';
import Login from '../Register/Login/Login';
import Register from '../Register/Register';


 const router = createBrowserRouter([
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
                {
                path: "/chef",
                element: <AllChefs></AllChefs>,
              loader: ()  => fetch('http://localhost:5000/chef') 
            },
    ],
  },
]);

export default router;