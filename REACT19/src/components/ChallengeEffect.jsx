import React, { useEffect, useState } from 'react'

const ChallengeEffect = () => {

  const [count,setCount]=useState(0);
  const [name,setName]=useState("")


  useEffect(()=>{
     
    console.log(name);
    
  },[name])

  useEffect(()=>{
    document.title=`count: ${count}`;
    
  },[count])
  return (

    <>

    <div>
      <h1>UseEffect challenge</h1>

      <h1>{count}</h1>
       
       <button onClick={()=> setCount(count+1)}>incremnet</button>
      <p>{name}</p>

      <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
    </div>
    
    </>
  )
}

export default ChallengeEffect