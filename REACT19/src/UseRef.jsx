import React from 'react'
import { useRef } from 'react';
import ChildRef from './ChildRef';
import WithoutForward from './WithoutForward';

const UseRef = () => {

  const username=useRef(null);
  const password=useRef(null);

  const handlesubmit=(e)=>{
    e.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);

  }

  return (   

    <form onSubmit={handlesubmit}>
{/* 
    <ChildRef label="username" type="text"  ref={username}/>
    <ChildRef label="password" type="password"  ref={password}/> */}


    
    <     WithoutForward label="username" type="text"  ref={username}/>
    <     WithoutForward label="password" type="password"  ref={password}/>
    <button onClick={handlesubmit}>submit</button>
    </form>
  )
}

export default UseRef