import React, { useEffect, useState } from 'react'

const Youtubesub = () => {

  const [count ,setCount]=useState(0);
  
  useEffect(()=>{

    const timer =setInterval(()=>{
      setCount((prev)=> prev+1)
    },1000)

    return ()=> clearInterval(timer)
  },[])


return (
    <>

    <h1>Youtube Followers</h1>

    <p>{count}</p>
    
    
    </>
  )
}

export default Youtubesub