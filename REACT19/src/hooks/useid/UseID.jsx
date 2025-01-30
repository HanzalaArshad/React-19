import React, { useId, useState } from 'react'

const UseID = () => {


  const [user,setUser]=useState({
    name:"",
    password:"",
  });


  const changeOn=(e)=>{
    const {name,value} =e.target;
    setUser((prev)=>({...prev,[name]:value}));


  }
  const id = useId();

  const handleSubmit=(e)=>{

    e.preventDefault();
    
    const data={...user}
    console.log(data);
      
  }
  return (
    <form onSubmit={handleSubmit}>
     <label htmlFor={id+"username"}>UserName</label>
     <input type="text"  id={id+"username"} name='name' value={user.name} onChange={changeOn} />

     
     <label htmlFor={id+"password"}>Password</label>
     <input type="password"  id={id+"password"} name='password' value={user.password} onChange={changeOn} />


    <button>Click</button>
    </form>
  )
}

export default UseID