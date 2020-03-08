import React from "react";
import "./slider.scss";
import { Carousel } from "react-bootstrap";
import imageOne from "../assets/imgOne.jpg";
import imageTwo from "../assets/imgTwo.jpg";
import imageThree from "../assets/imgThree.jpg";
import imageFour from "../assets/imgFour.jpg";
import imageFive from "../assets/imgFive.jpg";

const Slider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img
            className="image-slider d-block w-100"
            src={imageOne}
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider  d-block w-100 h-800"
            src={imageTwo}
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider  d-block w-100"
            src={imageThree}
            alt="third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider  d-block w-100"
            src={imageFour}
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider  d-block w-100"
            src={imageFive}
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
