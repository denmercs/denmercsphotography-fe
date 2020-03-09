import React from "react";
import Header from "./header";
import "./inquire.scss";

const Inquire = () => {
  return (
    <>
      <Header />
      <iframe
        id="sprout-iframe"
        src="//api.sproutstudio.com/leads/viewform/5b7f5f90f3973e42c3512e1bfe310fd9449ef0039b3d2f79/167179"
        frameBorder="0"
        scrolling="no"
        className="inquire-form"
      ></iframe>
    </>
  );
};

export default Inquire;
