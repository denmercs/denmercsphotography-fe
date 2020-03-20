import React from "react";
import { Spinner } from "react-bootstrap";

const SpinnerMap = () => {
  return (
    <div className="spinner">
      <p>We are preparing our portfolio...</p>
      <div className="spinner-icon">
        <Spinner size="lg" animation="border" />
      </div>
    </div>
  );
};

export default SpinnerMap;
