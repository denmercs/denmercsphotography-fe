import React from "react";
import { Container } from "react-bootstrap";
import "./inquire.scss";

const Inquire = () => {
  return (
    <Container>
      <h3 className="inquire-title">Inquire Now</h3>
      <div className="inquire-container">
        <p>Since we accept a limited number of weddings each year. We have been receiving a lot of messages/inquiries, please provide the following details below. If the packages above do not meet your needs, contact us for a customized package.</p>
        <iframe
          id="sprout-iframe"
          src="//api.sproutstudio.com/leads/viewform/5b7f5f90f3973e42c3512e1bfe310fd9449ef0039b3d2f79/167179"
          frameBorder="0"
          scrolling="yes"
          className="inquire-form"
        ></iframe>
      </div>
    </Container>
  );
};

export default Inquire;
