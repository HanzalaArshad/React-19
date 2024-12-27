import React from "react";

const SeriesData = ({currelem}) => {

  const {id,img_url,name,rating,description,genre,cast,watch_url}=currelem;

  const ratingclass=rating>=8.5?"super_hit":"average";
  const buttonclass=rating>=8.5?"super_hit":"average";

  
  return (
    <>
            <li>
              <div className="divcontainer">
                <img src={img_url} width="100%" />
                <h2>{name}</h2>
                <h3>Rating  <span className={`rating ${ratingclass}`}>{rating}</span></h3>
                <p>summary:{description}</p>
                <p>Genere: {genre}</p>
                <p>Cast:{cast}</p>

                <a href={watch_url}>
                  <button className={buttonclass}>Watch Now</button>
                </a>
              </div>
            </li>
    </>
  );
};

export default SeriesData;
