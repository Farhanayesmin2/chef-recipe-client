import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider } from 'react-router-dom'
// import App from './App.jsx'
import UserContext from './Component/Contexts/UserContext/UserContext.jsx'
import router from './Component/Routes/router.jsx'

// import UserContext from './Component/Contexts/UserContext/UserContext.jsx';
import './index.css'

// import UserContext from './Contexts/UserContext/UserContext';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContext>
      <RouterProvider router={router}></RouterProvider>
  </UserContext>
   
   
  </React.StrictMode>,
)
 
