import React from 'react';
import { NavLink, useNavigate, useRouteError } from 'react-router-dom';

const PageNotFound = () => {
  const error = useRouteError();
  const navigate =useNavigate()

  const handleNavigate=()=>{
    navigate(-1)
  }

  return (
    <div className="tw-flex tw-flex-col tw-items-center tw-justify-center tw-h-screen tw-bg-gray-900 tw-text-white">
      <h1 className="tw-text-6xl tw-font-bold tw-text-red-500">404</h1>
      <p className="tw-text-2xl tw-mt-4">Oops! Page Not Found</p>
      <p className="tw-text-lg tw-mt-2 tw-text-gray-400">
        {error?.statusText || "Sorry, the page you're looking for doesn't exist."}
      </p>
      <NavLink  onClick={handleNavigate}
        className="tw-mt-6 tw-bg-blue-500 tw-text-white tw-px-6 tw-py-3 tw-rounded-lg tw-hover:bg-blue-600 tw-transition"
      >
        Back to Home
      </NavLink>
    </div>
  );
};

export default PageNotFound;
