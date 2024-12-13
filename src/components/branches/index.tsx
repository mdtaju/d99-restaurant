import { roboto } from "@/app/fonts/font-variables";
import { branchesData } from "@/data";
import Branch from "./branch";

const Branches = () => {
  return (
    <div id="branch" className="w-full max-w-[950px] mx-auto px-4 py-[60px]">
      <h2 className={`main_title ${roboto.className}`}>Our Branches</h2>
      <div className="space-y-4 mt-6">
        {branchesData.map((item, i) => (
          <Branch key={i} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Branches;
