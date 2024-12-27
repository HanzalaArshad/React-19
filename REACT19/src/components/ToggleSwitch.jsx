import { useState } from "react"
import "./Toggleswitch.css"
const ToggleSwitch = () => {


  const [isopen,setIsOpen]=useState(true);
  


  const handleswitch=()=>{
     setIsOpen(!isopen);

  }


  const checkonoff=isopen?"on":"off";
  const ToggleBg={backgroundColor: isopen?"#4caf50":""}
  return (

    <div className="toggle-switch" style={ToggleBg}  onClick={handleswitch}>
        <div className={`switch ${checkonoff}`}>
        <span className="switch-text">{checkonoff}</span>
      </div>
    </div>
  )
}

export default ToggleSwitch