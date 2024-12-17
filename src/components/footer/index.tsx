import { roboto } from "@/app/fonts/font-variables";
import { InstagramFilled, MailFilled } from "@ant-design/icons";
import Image from "next/image";
import Link from "next/link";
import Logo from "/public/images/D99LOGO-black.svg";
import LocationIcon from "/public/images/location.png";
import PhoneIcon from "/public/images/phone.png";

const Footer = () => {
  return (
    <footer className="bg-themeBlack py-[20px] sm:py-[50px]">
      <div className="w-full max-w-[980px] mx-auto px-4">
        <div className="w-full pb-[20px] sm:pb-[50px] border-b border-gray-600 text-center">
          <h1 className="text-center text-sm md:text-3xl font-semibold text-themePrimary uppercase">
            Interested in partnering with us ?
          </h1>
          <Link href={"https://wa.me/+918110011099"} target="_blank">
            <button
              className={`bg-themePrimary text-themeBlack text-lg uppercase font-medium px-6 py-2 rounded-[4px] mt-6 ${roboto.className}`}>
              Franchise Enquiry
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 py-[10px] sm:py-[50px] border-b border-gray-600">
          {/* phone */}
          <div className="text-center text-themePrimary text-xl font-medium">
            <Image src={PhoneIcon} alt="phone" className="mx-auto" />
            <p className="mt-6">+918110011099</p>
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
              <Link href={"mailto:helloo.d99@gmail.com"}>
                <MailFilled className="text-white text-xl hover:text-themePrimary transition-all" />
              </Link>
              <Link
                href={"https://www.instagram.com/helloo.d99/"}
                target="_blank">
                <InstagramFilled className="text-white text-xl hover:text-themePrimary transition-all" />
              </Link>
            </div>
          </div>
          {/* location */}
          <div className="text-center text-themePrimary text-xl font-medium">
            <Image src={LocationIcon} alt="phone" className="mx-auto" />
            <p className="mt-6">
              No 3, Muthusha Street, Nehru Nagar, Secretariat Colony,
              Pallavaram,
            </p>
            <p>Chennai, Tamil Nadu 600043</p>
          </div>
        </div>
        {/* bottom links */}
        <div className="text-white font-medium text-sm mt-[20px] sm:mt-[50px] text-center">
          <ul className="flex items-center divide-x divide-white w-fit mx-auto mb-3">
            <li className="px-6 hover:underline">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="px-6 hover:underline">
              <Link href={"/about"}>About</Link>
            </li>
          </ul>
          <p>© 2025 D99 - All rights reserved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
