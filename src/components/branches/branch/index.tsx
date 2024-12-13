import { roboto } from "@/app/fonts/font-variables";
import { BranchesType } from "@/data/types";
import Image from "next/legacy/image";
import Link from "next/link";

const Branch = ({ item }: { item: BranchesType }) => {
  return (
    <div className="bg-themePrimary rounded-[4px] p-4 flex flex-wrap items-stretch gap-4 justify-between">
      {/* image area */}
      <div className="w-[280px] md:w-[300px] h-[200px] relative mx-auto">
        <Image
          src={item.imgPath}
          alt={item.name}
          layout="fill"
          className="w-full h-full absolute object-cover object-center"
        />
      </div>
      {/* info */}
      <div className="flex flex-wrap gap-4 items-stretch justify-between flex-grow-[1]">
        <div className="flex flex-col justify-center">
          <h4 className="text-xl md:text-3xl font-medium">{item.name}</h4>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-5">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
            <p className="text-xl font-medium text-[#494949]">{item.address}</p>
          </div>
          <div
            className={`flex flex-wrap gap-3 items-center mt-6 md:mt-10 ${roboto.className}`}>
            <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
              Call Now
            </button>
            <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
              Locate Us
            </button>
            <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
              Reserve Table
            </button>
          </div>
        </div>
        <div className="pl-4 border-l-2 border-themeBlack flex flex-col justify-center">
          <h5
            className={`uppercase text-2xl font-semibold ${roboto.className}`}>
            Order Now
          </h5>
          <div className="flex items-center gap-4 mt-[20px] w-fit mx-auto">
            <Link href={item.zomatoUrl}>
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={"/images/Zomato_logo.png"}
                  alt="zomoto"
                  layout="fill"
                  className="w-full h-full absolute rounded-full object-contain object-center hover:scale-95 transition-all"
                />
              </div>
            </Link>
            <Link href={item.swiggyUrl}>
              <div className="w-[40px] h-[40px] relative">
                <Image
                  src={"/images/swiggy-logo.png"}
                  alt="zomoto"
                  layout="fill"
                  className="w-full h-full absolute rounded-full object-contain object-center hover:scale-95 transition-all"
                />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Branch;
