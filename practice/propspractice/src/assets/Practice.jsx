import React from 'react'

const Practice = () => {

  const Students=[1,2];

  return (

    <>

{/* <p>{Students.length ===0 && "not available"}</p> */}
{/* <p>{!Students.length && "not available"}</p> */}

<p>{Boolean (!Students.length) && "not available"}</p>


<p>{`students are ${Students}`}</p>


    
    </>
  )

}

export default Practice