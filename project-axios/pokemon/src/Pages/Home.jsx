import React from 'react'
import { NavLink } from 'react-router-dom'

const Home = () => {
  return (
    <>
    <section className="container-fluid" style={{backgroundColor:"#ddf3da"}}>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center gap-2" style={{paddingTop:"100px"}}  >
          <div className="col-6">
            <h1>Join a Community of <span className='text-warning'>Pokemon</span></h1>
            <h2>Explore the World of <span className='text-primary'>Pokemon</span></h2>
            <p className='mt-5'>Embark on an exciting journey to explore 30 incredible Pokémon, each with their unique abilities and strengths. Dive into the fascinating world of these captivating creatures, learn about their capabilities, and uncover what makes them truly special. Get ready to catch ‘em all and become the ultimate Pokémon Trainer!</p>

            <button className="btn btn-warning "><NavLink className="btn text-black" to="/pokemon">Explore More</NavLink></button>

          </div>


          <div className="col-4">
            <figure>
              <img src="public/pokemon.png" alt="" className='img-fluid w-100' />
            </figure>
          </div>
        </div>

      </div>
    </section>
    </>
  )
}

export default Home