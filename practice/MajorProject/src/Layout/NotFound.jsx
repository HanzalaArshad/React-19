import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'
import { FaHome } from 'react-icons/fa'
import { Link, useRouteError } from 'react-router-dom'

const NotFound = () => {

  const error=useRouteError();

  return (
    <div className="d-flex align-items-center justify-content-center vh-100 bg-light">
    <div className="text-center">
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <p className="fs-3">
        <span className="text-danger">Oops!</span> Page not found.
      </p>
      <p className="lead">
        The page you’re looking for doesn’t exist. It might have been moved or deleted.
      </p>
      <p>{error.data}</p>
      <div className="d-flex justify-content-center mt-4">
        <Link to="/" className="btn btn-primary me-3">
          <FaHome className="me-2" /> Go Home
        </Link>
        <Link to="/search" className="btn btn-outline-secondary">
          <AiOutlineSearch className="me-2" /> Search Again
        </Link>
      </div>
    </div>
  </div>

  
  )
}

export default NotFound