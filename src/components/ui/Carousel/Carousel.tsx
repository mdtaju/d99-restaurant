"use client";
import React from "react";
import Slider, { Settings } from "react-slick";

type propsTypes = {
  settings: Settings;
  children: React.ReactNode;
};

function Carousel(props: propsTypes) {
  const { settings, children } = props;
  return (
    <>
      <Slider {...settings}>{children}</Slider>
    </>
  );
}

export default Carousel;
