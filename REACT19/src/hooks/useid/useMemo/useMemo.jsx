import { useMemo, useState } from "react";

const ExpensiveCompoent=()=>{

  const sum=()=>{
    let i=0;
     
    for(i=0;i<1000000000;i++){
      i=i+1
    }

    return i
  }
  
  const Total=useMemo(()=> sum(),[])

  return <p>sum:{Total}</p>
}



const Parent = () => {
  const [count,setCount]=useState(0)
  return (
    <div className="flex flex-col justify-center items-center h-lvh ">

      <ExpensiveCompoent/>

       <button className="px-4 p-2 bg-cyan-900 hover:bg-cyan-950 text-teal-50" onClick={()=> setCount(count+1)}>Increment</button>
       <p className="text-yellow-600">{count}</p>
    </div>
  )
}

export default Parent;