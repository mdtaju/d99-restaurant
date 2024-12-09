import { roboto } from "@/app/fonts/font-variables";
import { chefsData } from "@/data";
import Image from "next/legacy/image";

const Chefs = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto">
        <h2
          className={`text-center text-2xl md:text-3xl font-medium uppercase tracking-wider ${roboto.className}`}>
          Finest Best Chefs
        </h2>
        <ul className="w-full max-w-[1230px] mx-auto flex items-center gap-4 justify-between overflow-x-scroll mt-[80px] no-scrollbar">
          {chefsData.map((chef, i) => (
            <li key={i}>
              <div className="relative w-[260px] h-[290px] mb-8">
                <Image
                  src={chef.imgPath}
                  layout="fill"
                  alt={chef.name}
                  className="w-full h-full absolute object-contain object-center"
                />
              </div>
              <div className="text-center text-xl">
                <h4 className="">{chef.name}</h4>
                <p className="text-lg text-themePrimary">{chef.post}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chefs;
