import React, { useContext } from 'react'
import { BioContext } from './context'
import { useBioContext } from './customhook'

const Home = () => {

     const {myname,age}=useBioContext();
  return (

    <h1>My name is {myname} and i am {age} year old</h1>
  )
}

export default Home



