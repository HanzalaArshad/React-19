import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const LoaderPage = () => {
  return (
    <div
      className="d-flex justify-content-center align-items-center vh-100 bg-dark text-white"
      style={{
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      {/* Spinner */}
      <div className="spinner-border text-light" role="status" style={{ width: "5rem", height: "5rem" }}>
        <span className="visually-hidden">Loading...</span>
      </div>

      {/* Title */}
      <h2 className="mt-4 fw-bold">
        Please Wait...
      </h2>

      {/* Subtext */}
      <p className="mt-2 fs-5">
       content is loading. Hang tight!
      </p>

      {/* Progress bar */}
      <div className="progress  w-75 mt-3" style={{ height: "1rem" }}>
        <div
          className="progress-bar progress-bar-striped progress-bar-animated bg-primary"
          role="progressbar"
          style={{ width: "75%" }}
          aria-valuenow="75"
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
};

export default LoaderPage;
