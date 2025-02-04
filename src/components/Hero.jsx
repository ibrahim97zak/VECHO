import React from "react";
import { Link } from "react-router-dom";
import NavBar from "../components/Navbar/NavBar";
import heroImg from "../images/web-dev.svg";
import ImageSlider from "./ImageSlider";

const Hero = () => {
  return (
    <>
      <div className="hero" id="hero">
        <div
          className="m-auto overflow-hidden mx-4 mt-8 lg:mt-4 p-2 md:p-12 h-5/6"
          data-aos="zoom-in"
        >
          <ImageSlider />
        </div>
      </div>
    </>
  );
};

export default Hero;
