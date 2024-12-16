import Chefs from "@/components/Chefs";
import Delights from "@/components/delights";
import Faqs from "@/components/faqs";
import Gallery from "@/components/gallery";
import SubSlider from "@/components/ui/sub-slider";

const About = () => {
  return (
    <main>
      <SubSlider pathName="About Us" />
      <Delights />
      <Gallery />
      <Faqs />
      <Chefs />
    </main>
  );
};

export default About;
