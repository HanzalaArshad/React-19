import React from 'react'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Applayout from './assets/Layout/Applayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Pokemon from './Pages/Pokemon';

const App = () => {
 
  const router=createBrowserRouter([
    {
      path:'/',
      element:<Applayout/>,
      children:[
        {
          path:"/",
          element:<Home/>
        },
        {
          path:"/about",
          element:<About/>
        },
        {
          path:"/pokemon",
          element:<Pokemon/>
        }
      ]
    }
  ])

  return <RouterProvider router={router} />;

}

export default App