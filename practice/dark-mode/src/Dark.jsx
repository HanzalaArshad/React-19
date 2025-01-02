import React, { useContext } from 'react'
import { ThemeContext } from './context/context'

const Dark = () => {

  const {theme,handleToggle}=useContext(ThemeContext);

  console.log(theme);
  

  return (

    <div className={`px-3 flex flex-col justify-center items-center h-lvh ${theme === "dark" ? "bg-cyan-950" : "bg-white"}`}>
      <h1 className={`${theme === "dark" ? "text-white" :"text-black"}`}>The webiste is this</h1>
      <p className={`${theme === "dark" ? "text-white" :"text-black"}`}>react dark mode project</p>
      <button className='px-4 bg-blue-500 hover:bg-blue-700 rounded-lg mt-4 p-2' onClick={handleToggle}>{theme ==="dark"? "switch to light" : "switch to the dark"}</button>
    </div>
  )
}

export default Dark