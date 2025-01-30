import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import AppLayout from "./Components/Layout/AppLayout";
import PageNotFound from "./Components/Layout/PageNotFound";
import Movie from "./Components/Layout/Movie";
import { getMoviesData } from "./api/GetApiData";
import MovieDetails from "./Components/Ui/MovieDetails";
import { getMoviesDetail } from "./api/GetMovieDetail";
import Contact, { getContact } from "./pages/Contact";
// import './App.css'



const App = () => {

  const router=createBrowserRouter([

    {
      path:"/",
      errorElement:<PageNotFound/>,
      element:<AppLayout/>,
      children:[
        
          {
            path:'/',
            element:<Home/>
          },
      
          {
            path:'/aboutus',
            element:<About/>
          }
,
          {
            path:'/movie',
            element:<Movie/>,
            loader:getMoviesData
          }
      ,
      {
        path:'/movie/:movieID',
        element:<MovieDetails/>,
        loader:getMoviesDetail
      }
        
      ,{
        path:'/contact',
        element:<Contact/>,
        action:getContact
      }
      ]
    },

  ])


  // const router =createBrowserRouter(
  //   createRoutesFromElements(
  //         <Route>
  //           <Route path='/' element={<Home/>}/>
  //           <Route path='/about' element={<About/>} />


  //         </Route>
  //   )
  // )
  return <RouterProvider router={router} />;

}

export default App