import Branches from "@/components/branches";
import CustomerReviews from "@/components/customer-reviews";
import Menus from "@/components/menus";
import MustTry from "@/components/must-try";
import SliderBanner from "@/components/ui/slider";

export default function Home() {
  return (
    <main className="">
      <SliderBanner />
      <section className="" style={{ background: `url('/images/bg.jpg')` }}>
        <Menus />
        <MustTry />
        <Branches />
        <CustomerReviews />
      </section>
    </main>
  );
}
