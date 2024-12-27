import React, { useState } from 'react'

const App = () => {
  const [login,setLogin]=useState("false");
  const [user,setUser]=useState("false");

  const user1="Hanzala Arshad";

  const handlelogin=()=>{
    setLogin(!login)
  }

  const handleuser=()=>{
    setUser(!user);
  }

  const handleClear=()=>{
    setUser("")
  }

  return (

    <div className="container-fluid">
      <div className="container">
        <div className="row">
        <div className="col-12">
          <h1 className='text-center'> Welcome to the short circuit eval</h1>

          <p>{login && "you are loged in "}</p>
          <p>{user ?`${user1}`:"plz login"}</p>


          <button className='btn btn-dark  m-3' onClick={handlelogin}>Login</button>  
          <button className='btn btn-dark m-3' onClick={handleuser}>setUser</button>  
          <button className='btn btn-dark m-3' onClick={handleClear}>Clear User</button>  
        </div>
        </div>
      </div>

    </div>
  )
}

export default App;