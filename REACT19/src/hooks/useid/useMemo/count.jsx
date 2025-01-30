import React, { memo, useRef } from 'react'

const Count = ({biodata}) => {

  const renderCount=useRef(0);
  return (
    
    <div className='mt-3 font-display text-center '>

      <p>
        Nothing changed   here but i have   now rendere

        <span className='text-red-600'>{renderCount.current++}</span>
        <p>my name is {biodata}</p>
      </p>
    </div>
 
  )
}

export default memo(Count)