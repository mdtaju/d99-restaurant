import { roboto } from "@/app/fonts/font-variables";
import { FacebookFilled, InstagramFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/D99-RoundLogo.png";
import LocationIcon from "/public/images/location.png";
import PhoneIcon from "/public/images/phone.png";

const Footer = () => {
  return (
    <footer
      className="bg-cover bg-center py-[50px]"
      style={{ backgroundImage: `url('/images/footer-bg.jpg')` }}>
      <div className="w-full max-w-[980px] mx-auto px-4">
        <div className="w-full pb-[50px] border-b border-gray-600 text-center">
          <h1 className="text-center text-3xl md:text-4xl font-semibold text-themePrimary uppercase">
            Interested in partnering with us ?
          </h1>
          <button
            className={`bg-themePrimary text-themeBlack text-lg uppercase font-medium px-6 py-2 rounded-[4px] mt-6 ${roboto.className}`}>
            Franchise Enquiry
          </button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-[50px] border-b border-gray-600">
          {/* phone */}
          <div className="text-center text-white text-xl font-medium">
            <Image src={PhoneIcon} alt="phone" className="mx-auto" />
            <p className="mt-6">(+01) 00 123-456-789</p>
            <p>+00 987-654-321</p>
          </div>
          {/* logo */}
          <div className="border-y border-x-0 md:border-y-0 md:border-x border-gray-600 px-0 py-4 md:px-4 md:py-0">
            <Image
              src={Logo}
              alt="d99-restaurant"
              width={120}
              height={120}
              className="mx-auto"
            />
            <div className="flex items-center gap-3 w-fit mx-auto mt-6">
              <Link href={"#"}>
                <FacebookFilled className="text-white text-xl hover:text-themePrimary transition-all" />
              </Link>
              <Link href={"#"}>
                <InstagramFilled className="text-white text-xl hover:text-themePrimary transition-all" />
              </Link>
            </div>
          </div>
          {/* location */}
          <div className="text-center text-white text-xl font-medium">
            <Image src={LocationIcon} alt="phone" className="mx-auto" />
            <p className="mt-6">Pallavaram, Chennai - 43</p>
            <p>Chennai, India</p>
          </div>
        </div>
        {/* bottom links */}
        <div className="text-white font-medium text-sm mt-[50px] text-center">
          <ul className="flex items-center divide-x divide-white w-fit mx-auto mb-3">
            <li className="px-6 hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-6 hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
          <p>© 2024 VegPoint_default - WordPress Theme by Avanam</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
