import React from "react";
import "./App.css"; // Custom CSS for the spinner

const Loading = () => {
  return (
      <div className="h-100 w-100">
    <div className="fancy-spinner-container">
      <div className="fancy-spinner"></div>
      <p className="loading-message">Hold tight, loading awesome stuff...</p>
    </div>
    </div>
  );
};

export default Loading;
