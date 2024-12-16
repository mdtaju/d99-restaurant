import { GalleryData } from "@/data";
import { Image } from "antd";

const Gallery = () => {
  return (
    <div className="container px-4 md:px-0 mx-auto py-[20px] md:py-[50px]">
      <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        <div className="col-span-1 xs:col-span-2 h-[220px] xs:h-[280px] md:h-[320px] relative">
          <Image
            width={"100%"}
            height={"100%"}
            alt=""
            src={GalleryData[0].imgPath}
            className="absolute w-full h-full object-cover"
            placeholder={
              <Image
                alt=""
                preview={false}
                src={GalleryData[0].imgPath}
                width={"100%"}
                height={"100%"}
                className="absolute w-full h-full object-cover"
              />
            }
          />
        </div>
        {GalleryData.slice(1, GalleryData.length).map((item, i) => (
          <div key={i} className="h-[220px] xs:h-[280px] md:h-[320px] relative">
            <Image
              width={"100%"}
              height={"100%"}
              alt=""
              src={item.imgPath}
              className="absolute w-full h-full object-cover"
              placeholder={
                <Image
                  alt=""
                  preview={false}
                  src={item.imgPath}
                  width={"100%"}
                  height={"100%"}
                  className="absolute w-full h-full object-cover"
                />
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
