import React from "react";
import "./spinnermap.scss";
import coupleIcon from "../assets/wedding.gif";

const SpinnerMap = () => {
  return (
    <div className="spinner" size="lg">
      <p>loading...</p>
      <img src={coupleIcon} className="spinner-icon" />
    </div>
  );
};

export default SpinnerMap;
