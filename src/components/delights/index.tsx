import { roboto } from "@/app/fonts/font-variables";

const Delights = () => {
  return (
    <div className="pt-[80px] pb-[50px]">
      <div className="w-full max-w-[950px] mx-auto px-4 lg:px-0 text-center">
        <h2
          className={`text-2xl md:text-3xl font-medium uppercase tracking-wider ${roboto.className}`}>
          Our Culinary Delights
        </h2>
        <div className="mt-4 text-[16px]">
          <p>
            From Classic Dosas with a modern twist to innovative fusion
            creations!
          </p>
          <p className="text-lg text-themePrimary font-medium">
            Our menu is a celebration of flavors, textures & cultures.
          </p>
          <p>{`Craving tradition? Savor our authentic masala dosa, bursting with aromatic spices. In the mood for something adventurous? Try our innovation Pizza Dosa, Fries-Stick Dosa, or the one-of-a-kind Dum-Dum Briyani Dosa, each crafted to tantalize your taste buds and excite your palate. We also offer a tempting selection of saucy pasta, crispy fries, and tasty nuggets to compete your meal. But it doesn't stop there. Indulge in sweet treats that melt in your mouth and refreshing beverages that perfectly quench your thirst. Our desserts and drinks are designed to leave you smiling and craving more. Do visit us and experience the perfect fusion of tradition and innovation that sets us apart. We can't wait to share our love for fusion foods with you!`}</p>
        </div>
      </div>
    </div>
  );
};

export default Delights;
