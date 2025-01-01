import React, { forwardRef, useId } from 'react'

const ChildRef = forwardRef((props,ref)=>{
  
  const id=useId()
  return(
    <div>
      <label htmlFor={id} >{props.label}</label>
      <input type={props.type} ref={ref} />
    </div>
  )

})

export default ChildRef