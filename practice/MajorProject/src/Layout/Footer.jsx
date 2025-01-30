import React from "react"
import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from "react-icons/fa6"
import { NavLink } from "react-router-dom"

const Footer = () => <footer className=" page-footer font-small blue pt-4 bg-black h-100 w-100">
    <div className="container-fluid text-center text-md-left">
        <div className="row">
            <div className="col-md-6 mt-md-0 mt-3">
                <h5 className="text-uppercase text-white">Explore World </h5>
                <h6 className="text-uppercase text-white mt-4">Social Media</h6>

                <div className="d-flex justify-content-center align-items-center gap-3">
                    <NavLink className="text-primary fs-3"><FaFacebook/></NavLink>
                    <NavLink className="text-primary fs-3"><FaLinkedin/>
                    </NavLink>
                    <NavLink className=" fs-3" style={{color:"violet"}}><FaInstagram />
                    </NavLink>
                    <NavLink className="text-danger fs-3"><FaYoutube />
                    </NavLink>


                </div>
            </div>

            <hr className="clearfix w-100 d-md-none pb-0"/>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Links</h5>
                <ul className="list-unstyled">
                    <li ><NavLink  className="nav-link text-white mb-3"    to="/"> Home</NavLink></li>
                    <li><NavLink   className="nav-link text-white mb-3"  to="/about">About</NavLink></li>
                    <li><NavLink   className="nav-link text-white mb-3"  to="/Country">Country</NavLink></li>
                    <li><NavLink   className="nav-link text-white mb-3"  to="/Contact">Contact</NavLink></li>
                </ul>
            </div>

            <div className="col-md-3 mb-md-0 mb-3">
                <h5 className="text-uppercase text-white">Quick Links</h5>
                <ul className="list-unstyled">
                    <li><NavLink className="nav-link text-white mb-3" to="http://localhost:5173/country/Pakistan">Pakistan</NavLink></li>
                    <li><NavLink  className="nav-link text-white mb-3"   to="http://localhost:5173/country/Turkey">Turkiye</NavLink></li>
                    <li><NavLink  className="nav-link text-white mb-3"  to="http://localhost:5173/country/syria">Syria</NavLink></li>
                    <li><NavLink  className="nav-link text-white mb-3"  to="http://localhost:5173/country/palestine">Palestine</NavLink></li>
                </ul>
            </div>
          
        </div>
    </div>

    <div className="footer-copyright text-center text-white py-3">© 2025 Copyright Explore World
        <p>Made by Hanzala Arain</p>
    </div>

</footer>

export default Footer
