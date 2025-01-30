import React from 'react';
import { NavLink } from 'react-router-dom';

const Card = ({ currMovie }) => {
  const { Title, Year, Poster, imdbID } = currMovie; // Destructure movie properties

  return (
    <li className="card mb-3">
      <div className="card-body">
        <img 
          src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/150"} 
          alt={`${Title} Poster`} 
          className="img-fluid mb-2"
        />
        <h5 className="card-title">{Title}</h5>
        <p className="card-text">Year: {Year}</p>
        <NavLink to={`/movie/${imdbID}`}>
        <button
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn btn-primary">
          View on IMDb
        </button>
        </NavLink>
      </div>
    </li>
  );
};

export default Card;
