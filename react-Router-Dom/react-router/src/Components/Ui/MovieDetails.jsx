import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'

const MovieDetails = () => {
    const moviedata=useLoaderData();
    console.log(moviedata);
    

  
  return (

    <>
    <div className="container-fluid">
      <div className="container d-flex justify-content-center align-items-center p-4">
        <div className="row ">
          <div className="col-12">
<div className="card mb-3" style={{maxwidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src={moviedata.Poster} className="img-fluid rounded-start" alt="..."/>
    </div>
    <div className="col-md-8">
      <div className="card-body">
        <h3 className="card-title fs-3" style={{fontWeight:"800"}}> Movie Name <span style={{fontWeight:"Bolder"}}>{moviedata.Title}</span> </h3>
        <p className="card-text ">{moviedata.Plot}</p>

        <p className="card-text mt-3" style={{fontWeight:"700"}}> Type: <span className='text-secondary'>{moviedata.Type}</span></p>
        <p className="card-text" style={{fontWeight:"700"}}> RunTime: <span className='text-secondary'>{moviedata.Runtime}</span></p>
        <p className="card-text text-black" style={{fontWeight:"700"}}> Actors: <span className='text-secondary'>{moviedata.Actors}</span></p>

        <p className="card-text text-black" style={{fontWeight:"700"}}> Director: <span className='text-secondary'>{moviedata.Director}</span></p>
        <p className="card-text" style={{fontWeight:"700"}}> Countries: <span className='text-secondary'>{moviedata.Country}</span></p>
        <p className="card-text" style={{fontWeight:"700"}}> Genre: <span className='text-secondary'>{moviedata.Genre}</span></p>

        <p className="card-text" style={{fontWeight:"700"}}> Language: <span className='text-secondary'>{moviedata.Language}</span></p>
        
        <p className="card-text" style={{fontWeight:"700"}}> Writer: <span className='text-secondary'>{moviedata.Writer}</span></p>
        
        <p className="card-text" style={{fontWeight:"700"}}> Released: <span className='text-secondary'>{moviedata.Released}</span></p>

        <p className="card-text" style={{fontWeight:"700"}}> Awards: <span className='text-secondary'>{moviedata.Awards}</span></p>

        
        <p className="card-text" style={{fontWeight:"700"}}> Imdb Rating: <span className='text-secondary'>{moviedata.imdbRating}</span></p>
        




      </div>
    </div>
  </div>
  </div>
  </div>
</div>
</div>
</div>
</>

 )

}

export default MovieDetails