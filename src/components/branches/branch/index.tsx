import { roboto } from "@/app/fonts/font-variables";
import { BranchesType } from "@/data/types";
import Image from "next/legacy/image";
import Link from "next/link";

const Branch = ({ item }: { item: BranchesType }) => {
  return (
    <div className="bg-themePrimary rounded-[4px] p-4 flex flex-wrap items-stretch gap-4 justify-between">
      {/* image area */}
      {/* <div className="w-[280px] md:w-[300px] h-[200px] relative mx-auto">
        <Image
          src={item.imgPath}
          alt={item.name}
          layout="fill"
          className="w-full h-full absolute object-cover object-center"
        />
      </div> */}
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
              className="size-4">
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
            className={`hidden xs:flex flex-wrap gap-3 items-center mt-6 md:mt-10 ${roboto.className}`}>
            <Link href={`tel:+${item.phone}`}>
              <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
                Call Now
              </button>
            </Link>
            <Link href={item.mapLocation} target="_blank">
              <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
                Locate Us
              </button>
            </Link>
            <Link href={item.whatsApp} target="_blank">
              <button className="px-4 py-1 text-sm text-gray-300 bg-themeBlack rounded-[4px] uppercase hover:brightness-110 transition-all">
                Reserve Table
              </button>
            </Link>
          </div>
        </div>
        <div className="pl-4 border-l-2 border-themeBlack flex flex-col justify-center">
          <h5
            className={`uppercase text-2xl font-semibold ${roboto.className}`}>
            Order Now
          </h5>
          <div className="flex items-center gap-4 mt-[20px] w-fit mx-auto">
            <Link href={`tel:+${item.phone}`} className="block xs:hidden">
              <button
                aria-label="phone"
                className="size-8 rounded-full border border-themeBlack grid place-items-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                  />
                </svg>
              </button>
            </Link>
            <Link
              href={item.mapLocation}
              target="_blank"
              className="block xs:hidden">
              <button
                aria-label="location"
                className="size-8 rounded-full border border-themeBlack grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4">
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
              </button>
            </Link>
            <Link
              href={item.whatsApp}
              target="_blank"
              className="block xs:hidden">
              <button
                aria-label="reserve-table"
                className="size-8 rounded-full border border-themeBlack grid place-items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="m7.875 14.25 1.214 1.942a2.25 2.25 0 0 0 1.908 1.058h2.006c.776 0 1.497-.4 1.908-1.058l1.214-1.942M2.41 9h4.636a2.25 2.25 0 0 1 1.872 1.002l.164.246a2.25 2.25 0 0 0 1.872 1.002h2.092a2.25 2.25 0 0 0 1.872-1.002l.164-.246A2.25 2.25 0 0 1 16.954 9h4.636M2.41 9a2.25 2.25 0 0 0-.16.832V12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 12V9.832c0-.287-.055-.57-.16-.832M2.41 9a2.25 2.25 0 0 1 .382-.632l3.285-3.832a2.25 2.25 0 0 1 1.708-.786h8.43c.657 0 1.281.287 1.709.786l3.284 3.832c.163.19.291.404.382.632M4.5 20.25h15A2.25 2.25 0 0 0 21.75 18v-2.625c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125V18a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </button>
            </Link>
            <Link href={item.zomatoUrl} target="_blank">
              <div className="size-8 sm:size-10 relative">
                <Image
                  src={"/images/Zomato_logo.png"}
                  alt="zomoto"
                  layout="fill"
                  className="w-full h-full absolute rounded-full object-contain object-center hover:scale-95 transition-all"
                />
              </div>
            </Link>
            <Link href={item.swiggyUrl} target="_blank">
              <div className="size-8 sm:size-10 relative">
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
