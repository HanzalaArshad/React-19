import React from 'react'
import { CiMenuBurger } from 'react-icons/ci'

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <div className="grid navbar-grid">
          <div className="logo">
            <h1>HANZALA ARAIN</h1>

          </div>
          <nav className={showMenu?"menu-mobile":"menu-web"}>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact Us</a>
              </li>
              <li>
                <a href="">services</a>
              </li>
            </ul>
            <div className='ham-menu'>

              <button >            <CiMenuBurger />
              </button>

            </div>
          </nav>
        </div>
      </div>

    </header>
  )
}

export default Navbar