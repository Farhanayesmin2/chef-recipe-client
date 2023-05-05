import React from 'react';
import {createBrowserRouter} from "react-router-dom";
import Main from '../Layout/Main';
import AllChefs from '../Pages/AllChefs/AllChefs';
import Blog from '../Pages/Blog/Blog';
import ChefRecipes from '../Pages/ChefRecipes/ChefRecipes';
import Home from '../Pages/Home/Home';
import NotFound from '../Pages/NotFound/NotFound';
import LogIn from '../Register/Login/LogIn/LogIn';
import Register from '../Register/Register';


 const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>
        
        },
       {
                path: '/login',
                element: <LogIn></LogIn>
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
              // loader: ()  => fetch('http://localhost:5000/chef') 
      },
                  {
                path: '/chef/:id',
                element: <ChefRecipes></ChefRecipes>,
                loader: ({params}) => fetch(`https://top-chef-server-site-farhanayesmin2.vercel.app/chef/${params.id}`)
            },
           
    ],
   },
   {
    path: '*',
    element: <NotFound></NotFound>
},
]);

export default router;