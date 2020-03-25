import React from "react";
import { Image } from "react-bootstrap";
import "./spinnermap.scss";
import coupleIcon from "../assets/wedding.gif";

const SpinnerMap = () => {
  return (
    <div className="spinner" size="lg">
      <p>loading...</p>
      <Image src={coupleIcon} className="spinner-icon" />
    </div>
  );
};

export default SpinnerMap;
