import React from 'react'
import seriesData from "../api/seriesData.json"
import SeriesData from './SeriesData'

const Netflix = () => {
  return (
    <>
     <ul>

      {seriesData.map((currElem)=>(
        <SeriesData key={currElem.id}  currElem={currElem}/>
      ))}

     </ul>
       
    </>
  )
}

export default Netflix