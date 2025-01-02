import { createContext, useState } from "react";

export const ThemeContext=createContext();

export const ThemeProvider=({children})=>{
  
  const [theme,setTheme]=useState("dark")
    
  const handleToggle=()=>{
    setTheme((prev)=> (prev ==="dark" ?"light":"dark"))
  }
  return(

    <ThemeContext.Provider value={{theme,handleToggle}}>
      {children}
    </ThemeContext.Provider>
  )
}