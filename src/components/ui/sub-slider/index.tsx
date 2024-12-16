import Link from "next/link";

const SubSlider = ({ pathName }: { pathName: string; path: string }) => {
  return (
    <section className="w-full px-4 md:px-0 py-[30px] bg-[#e9e9e9] grid place-items-center">
      <div className="flex items-center mb-4">
        <Link href={"/"}>
          <span>Home / </span>
        </Link>
        <span>{pathName}</span>
      </div>
      <span className="text-4xl">{pathName}</span>
    </section>
  );
};

export default SubSlider;
