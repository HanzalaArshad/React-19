import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { getMovie } from './services/GetServices';

const Movies = () => {

  const[data,setData]=useState([]);


  const movieData=async()=>{
   try {
    const res=await getMovie();
    console.log(res.data.Search)
    setData(res.data.Search)

   } catch (error) {
    console.log(error);
    
   }

  }

  useEffect(()=>{
    movieData()
  },[])


  return (
    <div>
      <ul>
        {
          data.map((currele)=>{
            return(
              <img src={currele.Poster} key={currele.imdbID} alt="" />
            )
          })
        }
      </ul>
    </div>
  )
}

export default Movies