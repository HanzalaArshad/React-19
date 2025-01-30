import React, { useReducer } from 'react'

const Increment = () => {

  const initialState = {
    count: 0,
    inc: 2,
    dec: 2,
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case "INCREMENT":
        return { ...state,count: state.count<= 45 ? state.count+state.inc:state.count }
      
      case "DECREMENT":
        return { ...state,count: state.count>0? state.count-state.inc:state.count }

      case "RESET":
        return { count: 0 } // Added reset functionality

      default:
        return state
    }
  }

  const [state, dispatch] = useReducer(reducer, initialState)

  console.log(state); // Log state to see changes

  return (
    <div className='p-4 flex flex-col gap-y-3 justify-center items-center h-lvh '>
      <h1 className='text-purple-950 text-center'>Counter App</h1>
      <p className='text-xl text-yellow-700'>{state.count}</p>

      <button className='px-4 p-2 bg-green-500 hover:bg-green-900 text-white ' onClick={() => dispatch({ type: "INCREMENT" })}>INCREMENT</button>
      <button className='px-4 p-2 bg-red-500 hover:bg-red-900 text-white ' onClick={() => dispatch({ type: "DECREMENT" })}>DECREMENT</button>
      <button className='px-4 p-2 bg-orange-500 hover:bg-orange-900 text-white' onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  )
}

export default Increment
