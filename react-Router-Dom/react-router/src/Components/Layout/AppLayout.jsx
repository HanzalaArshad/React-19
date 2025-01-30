import React from 'react'
import Header from './Header'
import { Outlet, useNavigation } from 'react-router-dom'
import Footer from './Footer'
import Loading from './Loading'

const AppLayout = () => {

  const navigation=useNavigation();

if(navigation.state === "loading") return <Loading/>  
  return (
    <div>

      <Header/>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default AppLayout