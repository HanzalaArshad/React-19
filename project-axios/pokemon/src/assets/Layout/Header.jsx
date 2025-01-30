import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <section className="container-fluid" style={{ backgroundColor: "#31511E" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink className="navbar-brand text-white" to="/">
                Pokemon
              </NavLink>
              <button
                className="navbar-toggler "
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarNavAltMarkup"
                aria-controls="navbarNavAltMarkup"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon tw-bg-slate-100 tw-rounded-md px-2 " style={{color:"white"}}></span>
              </button>
              <div className="collapse navbar-collapse " id="navbarNavAltMarkup">
                <div className="navbar-nav w-100 d-flex justify-content-end">
                  <NavLink
                    to="/"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "yellow" : "white",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    Home
                  </NavLink>
                  <NavLink
                    to="/about"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "yellow" : "white",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    About
                  </NavLink>


                  
                  <NavLink
                    to="/pokemon"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "yellow" :"white",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    Pokemon
                  </NavLink>

                  <NavLink
                    to="/Contact"
                    className="nav-link"
                    style={({ isActive }) => ({
                      color: isActive ? "yellow" :"white",
                      fontWeight: isActive ? "bold" : "normal",
                    })}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </section>
    </>
  );
};

export default Header;
