import React, { useEffect, useState } from 'react'
import faq from "../api/faq.json";
import Faq from './Faq';


const Accordion = () => {

  const [data,setData]=useState([]);
  const [active,setActive]=useState(false);

  const handleButton=(id)=>{
    setActive((prev)=> (prev===id)?false:id)
  }


  useEffect(()=>{
    setData(faq)
  },[])
  return (
    <>
      <h1 className='text-center'>REACT ACCORDION</h1>

      <div className="container mt-5  ">
        <ul>
          {
            data.map((curr)=>{
              return (
                <Faq key={curr.id} currData={curr} active={active===curr.id} onToggle={()=> handleButton(curr.id)}/>
                 
                        )
            })
          }
        </ul>
      </div>
    
    </>
  )
}

export default Accordion