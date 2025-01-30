import { BioContext } from './context'
import { use } from "react";


export const useBioContext=()=>{

  const context=use(BioContext);
  if(context === undefined){
    throw new Error("it is not a child ");
    
  }
  return context;
}