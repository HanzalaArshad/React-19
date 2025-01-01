import React, { useEffect, useState } from 'react'


const Effect = () => {

  const [date,setDate]=useState(0);
  useEffect(()=>{
    setInterval(()=>{
      const updatedTask=new Date();
      setDate(updatedTask.toLocaleTimeString())

    },1000)

    
  },[date])

  return (

    <>
    <div>useEffect</div>
    <div>{date}</div>
    <button>incremnet </button>

    </>

  )
}

export default Effect