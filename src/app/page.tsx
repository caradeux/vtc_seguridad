import { Hero } from "@/components/sections/Hero";
import { Benefits } from "@/components/sections/Benefits";
import { ServicesOverview } from "@/components/sections/ServicesOverview";
import { Industries } from "@/components/sections/Industries";
import { Testimonials } from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <>
      <Hero />
      <Benefits />
      <ServicesOverview />
      <Industries />
      <Testimonials />
    </>
  );
}
