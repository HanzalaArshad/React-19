import { createContext } from "react";


export const BioContext=createContext();


export const BioProvider=({children})=>{

  const myname="hanzala";
  const age=21;
  return(
    <BioContext.Provider value={{myname,age}}>
      {children}
    </BioContext.Provider>
  )
}



