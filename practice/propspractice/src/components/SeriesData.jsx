import React from 'react'

const SeriesData = ({currElem}) => {
  return (
    

      <li>
        <div>
          <img src={currElem.img_url} alt="" width="50%" />
          <h2>{currElem.name}</h2>
          <h3>Rating {currElem.rating}</h3>
          <p>summary:{currElem.description}</p>
          <p>cast: {currElem.cast}</p>
          <p>genre: {currElem.genre}</p>
          <a href={currElem.watch_url}>
            <button>Watch Now</button>
          </a>

        </div>
      </li>
    
  
  )
}

export default SeriesData