import { MustTryItemType } from "@/data/types";
import Image from "next/legacy/image";

const MustTruItem = ({ item }: { item: MustTryItemType }) => {
  return (
    <div className="w-[305px] px-4">
      <div
        className="w-full h-[273px] bg-white rounded-[8px] p-4"
        style={{ boxShadow: "2px 2px 4px 0px rgba(0, 0, 0, 0.07)" }}>
        <div className="w-full h-full relative">
          <Image
            src={item.imgPath}
            alt={item.name}
            layout="fill"
            className="absolute w-full h-full object-contain object-center"
          />
        </div>
      </div>
      <h4 className="text-center mt-4 text-xl font-medium">{item.name}</h4>
      <p className="text-center text-lg">₹ {item.price}</p>
    </div>
  );
};

export default MustTruItem;
