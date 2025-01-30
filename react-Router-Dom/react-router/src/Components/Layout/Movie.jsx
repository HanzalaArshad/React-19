import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Card from '../Ui/Card';

const Movie = () => {
  const moviesdata = useLoaderData();
  console.log(moviesdata);

  return (
    <>
      <div className="container ml-5">
        <div className="row d-flex justify-content-center align-items-center mx-auto mt-5 ml-5">
          <ul className="list-unstyled gap-5 d-flex flex-wrap">
            {moviesdata.Search.map((curr) => (
              <Card key={curr.imdbID} currMovie={curr} />
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default Movie;
