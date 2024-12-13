"use client";
import { roboto, robotoSlab } from "@/app/fonts/font-variables";
import Image from "next/image";
import Slider from "react-slick";
import LeftLine from "/public/images/leftline.png";
import RightLine from "/public/images/rightline.png";

const sliderData = [
  {
    imgPath: "/images/main-banner-1.jpg",
    foodName: "Fries-Stick",
    item: "Dosa",
  },
  {
    imgPath: "/images/main-banner-2.jpg",
    foodName: "Feri-Feri",
    item: "Fries",
  },
];

function SlierBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    autoplaySpeed: 3000,
  };
  return (
    <div className={`w-full h-auto ${roboto.className}`}>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderData.map((item, i) => (
            <div key={i} className="w-full h-[266px] md:h-[600px] lg:h-[700px]">
              <div
                className="w-full bg-cover h-full bg-center grid place-items-center"
                style={{
                  backgroundImage: `url(${item.imgPath})`,
                }}>
                <div className="text-center">
                  <div className="relative flex items-center gap-4 overflow-hidden">
                    <Image
                      src={LeftLine}
                      alt="lef-line"
                      className="hidden md:block"
                    />
                    <span
                      className={`${robotoSlab.className} text-lg md:text-2xl`}>
                      Limited Time Offer
                    </span>
                    <Image
                      src={RightLine}
                      alt="lef-line"
                      className="hidden md:block"
                    />
                  </div>
                  <h1 className="text-4xl lg:text-8xl font-medium md:font-semibold uppercase mb-4 mt-5">
                    {item.foodName}
                  </h1>
                  <span className="text-3xl lg:text-7xl uppercase">
                    {item.item}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlierBanner;
