import AboutUsContent from "@/components/about-us-contents";
import Chefs from "@/components/Chefs";
import Gallery from "@/components/gallery";
import { roboto } from "../fonts/font-variables";

const About = () => {
  return (
    <main>
      {/* <SubSlider pathName="About Us" /> */}
      <AboutUsContent />
      {/* <Delights /> */}
      <Chefs />

      {/* <Faqs /> */}
      <div className="py-[20px] md:py-[40px] w-full max-w-[850px] mx-auto px-4 md:px-0">
        <h2 className={`main_title ${roboto.className} mt-8`}>
          Our Commitment
        </h2>
        <p className="description mt-2">
          Our restaurant isn’t just a place to eat; it’s a place to connect,
          relax, and enjoy exceptional food in a welcoming environment. Whether
          you’re visiting for a quick meal or a special celebration, we are
          committed to ensuring that your experience with us is memorable. We
          believe in offering more than just delicious food, we aim to provide
          you with an experience that will make you want to come back time and
          time again.
        </p>
        <h2 className={`main_title ${roboto.className} mt-8`}>Our Community</h2>
        <p className="description mt-2">
          We believe that being part of a community means giving back. That’s
          why we support local farmers, suppliers, and artisans to bring the
          best of fresh produce to your plate. Our commitment to sustainability
          guides everything we do, from sourcing ingredients responsibly to
          reducing waste in our operations. At D99, we are proud to serve food
          that not only tastes good but also does good. Whether you’re a regular
          guest or visiting for the first time, we invite you to enjoy the
          hospitality and flavors that make us special. Come for the food, stay
          for the experience, and let us share our passion for vegetarian
          cuisine with you.
        </p>
      </div>
      <Gallery />
    </main>
  );
};

export default About;
