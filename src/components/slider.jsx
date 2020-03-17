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
      <Carousel interval="5000" className="justify-content-md-center">
        <Carousel.Item>
          <img
            className="image-slider d-block w-50"
            src={imageOne}
            alt="first slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider d-block w-50"
            src={imageTwo}
            alt="second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider d-block w-50 "
            src={imageThree}
            alt="third slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider d-block w-50 "
            src={imageFour}
            alt="fourth slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="image-slider d-block w-50 "
            src={imageFive}
            alt="fifth slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default Slider;
