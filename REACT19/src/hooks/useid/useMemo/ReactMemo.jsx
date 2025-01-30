import React, { useMemo, useState } from 'react'
import Count from './count';

const ReactMemo = () => {

  const [count,setCount]=useState(0);

  const handleIncremnet=()=>{

    setCount(count+1);
    



  }


  const Biodata= useMemo(()=>{
    return {
    name:"hanzala",
    age:21
    }
  },[])
  return (

    <div className='flex flex-col justify-center items-center h-lvh'>
      <span>{count}</span>
    <button onClick={handleIncremnet}>Increment</button>

    <Count Biodata={Biodata}/>
    </div>

  )
}

export default ReactMemo



//also work with the 