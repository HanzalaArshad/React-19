import React, {  useId } from 'react'

const WithoutForward = ({label,ref,type})=>{
  
  const id=useId()
  return(
    <div>
      <label htmlFor={id} >{label}</label>
      <input type={type} ref={ref} />
    </div>
  )

}
export default WithoutForward