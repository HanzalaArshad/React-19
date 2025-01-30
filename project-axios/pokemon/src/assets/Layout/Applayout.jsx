import React, { Suspense } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Outlet, useNavigation } from 'react-router-dom'
import Loading from './Loading'

const Applayout = () => {

  const navigation = useNavigation();

if (navigation.state === "loading") return <Loading />;

 

   
  return (
    <div>
      <Header/>
      <Suspense fallback={<Loading />}>
      <Outlet />
    </Suspense>
      <Footer/>
    </div>
  )
}

export default Applayout