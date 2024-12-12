import { roboto } from "@/app/fonts/font-variables";
import { chefsData } from "@/data";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import Image from "next/legacy/image";
import Link from "next/link";

const Chefs = () => {
  return (
    <div className="py-[50px]">
      <div className="container mx-auto">
        <h2 className={`main_title ${roboto.className}`}>Finest Best Chefs</h2>
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
              <div className="flex items-center gap-3 w-fit mx-auto mt-2">
                <Link href={chef.facebookLink}>
                  <FacebookFilled className="text-gray-600 text-xl hover:text-themePrimary transition-all" />
                </Link>
                <Link href={chef.instagramLink}>
                  <InstagramFilled className="text-gray-600 text-xl hover:text-themePrimary transition-all" />
                </Link>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Chefs;
