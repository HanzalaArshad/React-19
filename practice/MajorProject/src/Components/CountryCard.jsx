import React, { useState } from 'react';
import { FaArrowRightLong } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const CountryCard = ({ country }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="col-lg-3 col-md-4 col-sm-6 col-12 mb-3 mt-3 d-flex justify-content-center align-item-center"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className="card bg-dark"
        style={{
          width: '20rem',
          borderTop: isHovered ? '10px solid orange' : '10px solid purple',
          transform: isHovered ? 'scale(1.05)' : 'scale(1)',
          transition: 'all 0.3s ease-in-out',
        }}
      >
        <img
          src={country.flags.svg}
          alt="Card image cap"
          className="w-100 h-50 mt-3 img-fluid p-5 bg-secondary"
          style={{
            filter: isHovered ? 'brightness(1.2)' : 'brightness(1)',
            transition: 'filter 0.3s ease-in-out',
          }}
        />
        <hr />
        <div className="card-body">
          <h5 className="card-title text-white">{country.name.common.length>15? country.name.common.slice(0,15)+"..." :country.name.common}</h5>
          <p
            className="card-text text-white"
            style={{ fontWeight: '700' }}
          >
            <span className="text-warning" style={{ fontWeight: '800' }}>
              Population:{' '}
            </span>
            {country.population.toLocaleString()}
          </p>

          <p
            className="card-text text-white"
            style={{ fontWeight: '700' }}
          >
            <span className="text-warning" style={{ fontWeight: '800' }}>
              Capital:{' '}
            </span>
            {country.capital}
          </p>

          <p
            className="card-text text-white"
            style={{ fontWeight: '700' }}
          >
            <span className="text-warning" style={{ fontWeight: '800' }}>
              Region:{' '}
            </span>
            {country.region}
          </p>

          <button
            className="btn border-warning text-white d-flex align-items-center justify-content-center"
            style={{
              border: '2px solid',
              backgroundColor: isHovered ? 'purple' : 'transparent',
              color: isHovered ? 'yellow' : 'white',
              transition: 'background-color 0.3s ease-in-out',
            }}
          >
            <Link
              className="nav-link"
              to={`/country/${country.name.common}`}
              style={{
                textDecoration: 'none',
                color: isHovered ? 'yellow' : 'white',
              }}
            >
              More Detail <FaArrowRightLong />
            </Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CountryCard;
