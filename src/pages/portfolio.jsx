import React from "react";
import { Container } from "react-bootstrap";
import Map from "../components/maps";
import Header from "./header";

const Portfolio = () => {
  return (
    <>
      <Header />
      <Container>
        <Map />
      </Container>
    </>
  );
};

export default Portfolio;
