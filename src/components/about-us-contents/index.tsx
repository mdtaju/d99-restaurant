import { roboto } from "@/app/fonts/font-variables";

const AboutUsContent = () => {
  return (
    <div className="py-[20px] md:py-[40px] w-full max-w-[850px] mx-auto px-4 md:px-0">
      <h2 className={`main_title ${roboto.className}`}>Helloo Foodies!</h2>
      <p className="description mt-2">
        At D99, we bring you the finest vegetarian delicacies, each dish crafted
        with love, authenticity, and the highest quality ingredients. Born out
        of a passion for cooking and a deep respect for tradition, our
        restaurant is a place where food becomes an experience to savor, and
        every visit feels like coming home.
      </p>
      <h2 className={`main_title ${roboto.className} mt-8`}>
        Our Founder’s Story
      </h2>
      <p className="description mt-2">
        The heart and soul behind D99 is our founder,{" "}
        <span className="font-semibold">MALARVIZHI N</span> N. A visionary and
        an entrepreneur, she started this journey in 2023 with one goal in mind,
        to bring people together over wholesome, delicious food that leaves a
        lasting impression. <span className="font-semibold">MALARVIZHI N</span>
        ’s unwavering commitment to quality and her relentless pursuit of
        culinary excellence has shaped the essence of our restaurant. From
        humble beginnings to becoming a beloved part of the community, her
        passion for food continues to inspire us every day.
      </p>
      <h2 className={`main_title ${roboto.className} mt-8`}>
        Our Mission & Values
      </h2>
      <p className="description mt-2">
        Our mission is simple: to serve exceptional, flavorful vegetarian dishes
        made from the freshest ingredients, while creating a warm and inviting
        atmosphere for everyone who walks through our doors.
      </p>
      <p className="description text-left mt-4">
        We are driven by a commitment to:
      </p>
      <ul className="list-inside list-disc">
        <li>
          Quality: Every dish is made with the highest quality, locally sourced
          ingredients.
        </li>
        <li>
          Sustainability: We strive to be eco-conscious in every aspect of our
          operations.
        </li>
        <li>
          Innovation: We constantly innovate, creating new and exciting flavors
          that reflect our commitment to culinary excellence.
        </li>
        <li>
          Customer Care: Providing a welcoming environment where every guest
          feels valued and appreciated.
        </li>
      </ul>
      <h2 className={`main_title ${roboto.className} mt-8`}>
        Our Unique Touch
      </h2>
      <p className="description mt-2">
        At D99, we’re not just serving food; we’re serving memories. Our
        dedication to vegetarian cuisine isn’t just about taste, it’s about
        creating an experience that lingers long after the meal is over. Whether
        it’s our signature dosas, freshly prepared chutneys, or innovative
        seasonal specials, we pride ourselves on offering a unique,
        unforgettable dining experience.
      </p>
    </div>
  );
};

export default AboutUsContent;
