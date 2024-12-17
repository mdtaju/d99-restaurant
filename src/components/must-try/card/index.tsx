import { MustTryItemType } from "@/data/types";
import Image from "next/legacy/image";

const MustTruItem = ({ item }: { item: MustTryItemType }) => {
  return (
    <div className="w-[280px] md:w-[400px] px-4">
      <div className="h-[280px] md:h-[400px] rounded-[8px] overflow-hidden">
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
    </div>
  );
};

export default MustTruItem;
