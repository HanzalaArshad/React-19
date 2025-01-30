import React from 'react'
import { FaLongArrowAltRight } from 'react-icons/fa'
import { FaArrowRightLong } from 'react-icons/fa6'
import { Link, NavLink } from 'react-router-dom'
import About from './About'
import Inner from '../Components/Inner'

const Home = () => {
  return (

    <>

    <section className="conatiner-fluid" style={{backgroundColor:"black"}}>
      <div className="container pt-5">
        <div className="row d-flex justify-content-center align-items-center">
          <div className="col-lg-7 col-md-7 col-12 ">
            <h1 className='text-white'> Discover the World Of Wonders</h1>
            <h3 className='text-white mt-2'>Boost Your Knowledge About the World</h3>
            <p className='text-white mt-3 ' style={{fontSize:"1.2rem"}}>  Embark on a journey to explore breathtaking destinations, uncover hidden gems, and immerse yourself in diverse cultures. Your adventure starts here where every corner of the world awaits discovery.
              </p>

              <button className='btn text-white d-flex justify-content-center align-items-center gap-2' style={{border:"2px solid white",backgroundColor:"#605f5f82"}}>  <Link className='nav-link ' to="/about">Start Exploring  <FaArrowRightLong />
              </Link>

              </button>
            
            
          </div>

          <div className="col-lg-4 col-md-5 col-12">
            <figure>
              <img src="world.png" alt="" className='img-fluid' />
            </figure>
            </div>
        </div>
      </div>

      <About/>
      <Inner/>
    </section>
    
    </>
  )
}

export default Home