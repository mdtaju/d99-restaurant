import { roboto } from "@/app/fonts/font-variables";
import { mustTryItems } from "@/data";
import { Settings } from "react-slick";
import Carousel from "../ui/Carousel/Carousel";
import {
  CarouselNextBtn,
  CarouselPreviousBtn,
} from "../ui/Carousel/CarouselArrows";
import MustTruItem from "./card";

const MustTry = () => {
  const slickSettings: Settings = {
    dots: false,
    rows: 1,
    infinite: false,
    speed: 500,
    slidesToScroll: 1,
    slidesToShow: 5,
    nextArrow: <CarouselNextBtn onClick={undefined} className="" />,
    prevArrow: <CarouselPreviousBtn onClick={undefined} className="" />,
    responsive: [
      {
        breakpoint: 1152,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 425,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };
  return (
    <div id="items" className="py-[20px] sm:py-[60px]">
      <div className="container mx-auto">
        <h2 className={`main_title ${roboto.className}`}>Must Try</h2>
        <div className="px-3 py-1 text-sm rounded-[4px] bg-themePrimary text-black w-fit mx-auto text-center mt-4">
          {`"Not Sure What to Order? These best-sellers never disappoint!"`}
        </div>
        <div className="px-4 lg:px-0 mt-12">
          <Carousel settings={slickSettings}>
            {mustTryItems.map((item, i) => (
              <MustTruItem key={i} item={item} />
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default MustTry;
