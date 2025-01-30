import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Country from './Pages/Country'
import AppLayout from './Layout/AppLayout'
import NotFound from './Layout/NotFound'
import "./App.css"
import CountryDetails from './Pages/CountryDetails'

const App = () => {

  const router=createBrowserRouter([

     {
      path:"/",
      element:<AppLayout/>,
      errorElement:<NotFound/>,
      children:[ {
        path:"/",
        element:<Home/>
      },
  
      {
        path:"/about",
        element:<About/>
      },
  
      {
        path:"/contact",
        element:<Contact/>
      },
  
      {
        path:"/Country",
        element:<Country/>
      },

      {
        path:"/Country/:id",
        element:<CountryDetails/>
      },
    ]
     }

   
  ])
  return (
    <RouterProvider router={router}></RouterProvider>
  )
}

export default App