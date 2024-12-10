import Chefs from "@/components/Chefs";
import CustomerReviews from "@/components/customer-reviews";
import Delights from "@/components/delights";
import Menus from "@/components/menus";
import MustTry from "@/components/must-try";
import SliderBanner from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="">
      <SliderBanner />
      <section className="" style={{ background: `url('/images/bg.jpg')` }}>
        <Delights />
        <Menus />
        <MustTry />
        <Chefs />
        <CustomerReviews />
      </section>
    </main>
  );
}
