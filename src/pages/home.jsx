import React from "react";
import Slider from "../components/slider";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./home.scss";

const home = () => {
  return (
    <div className="home">
      <Slider />
      <Container>
        <div className="intro">
          <p>
            Denmercs Photography is a husband and wife duo offering a wedding
            photography service specializing in capturing unique and beautiful
            portraiture in Wisconsin. Our style of wedding photography is deeply
            rooted in wedding photojournalism. Using natural light, flash
            techniques and mother nature’s flawless backdrop we produce a
            beautiful collection of photos coupled with a one-of-a-kind
            experience!
          </p>
        </div>
      </Container>
    </div>
  );
};

export default home;
