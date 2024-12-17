"use client";
import { roboto } from "@/app/fonts/font-variables";
import { sliderData } from "@/data";
import Slider from "react-slick";

function SlierBanner() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    autoplay: false,
    autoplaySpeed: 3000,
  };
  return (
    <div className={`w-full h-auto ${roboto.className}`}>
      <div className="slider-container">
        <Slider {...settings}>
          {sliderData.map((item, i) => (
            <div key={i} className="w-full bg-themeBlack">
              <div
                className="w-full h-[157px] xs:h-[220px] md:h-[450px] lg:h-[520px] xl:h-[680px] bg-contain bg-center bg-no-repeat"
                style={{
                  backgroundImage: `url(${item.imgPath})`,
                  backgroundSize: "100% auto",
                }}>
                {/* <div className="text-center">
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
                </div> */}
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default SlierBanner;
