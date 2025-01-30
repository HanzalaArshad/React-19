import React from "react";
import "./App.css"; // Custom CSS for the spinner

const Loading = () => {
  return (
    <div className="fancy-spinner-container">
      <div className="fancy-spinner"></div>
      <p className="loading-message">Hold tight, loading awesome stuff...</p>
    </div>
  );
};

export default Loading;
