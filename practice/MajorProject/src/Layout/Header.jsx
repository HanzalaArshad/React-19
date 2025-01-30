import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import "bootstrap/dist/js/bootstrap.bundle.min.js"; // Import Bootstrap JS
import { NavLink } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const handleNavClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scroll to top
  };

  return (
    <>
      <div className="container-fluid" style={{ backgroundColor: "#002244" }}>
        <div className="container">
          <nav className="navbar navbar-expand-lg">
            <div className="container-fluid">
              <NavLink
                className="navbar-brand fs-3 text-white"
                style={{ fontWeight: 900 }}
                to="/"
                onClick={handleNavClick} // Scroll to top on click
              >
                Explore World
              </NavLink>
              <button
                className="navbar-toggler custom-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span>
                  <IoMenu className="text-white fs-1" />
                </span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav ms-auto">
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/"
                      onClick={handleNavClick} // Scroll to top
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: "yellow",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                          : {
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/about"
                      onClick={handleNavClick} // Scroll to top
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: "yellow",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                          : {
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                      }
                    >
                      About
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Country"
                      onClick={handleNavClick} // Scroll to top
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: "yellow",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                          : {
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                      }
                    >
                      Country
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link"
                      to="/Contact"
                      onClick={handleNavClick} // Scroll to top
                      style={({ isActive }) =>
                        isActive
                          ? {
                              color: "yellow",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                          : {
                              color: "white",
                              fontWeight: "bold",
                              fontSize: "1rem",
                            }
                      }
                    >
                      Contact
                    </NavLink>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Header;
