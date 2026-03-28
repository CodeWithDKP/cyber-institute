import Image from "next/image";
import Navbar from "@/components/common/Navbar";
import Hero from "@/components/home/hero";
import Stats from "@/components/home/stats";
import About from "@/components/home/about";
import Courses from "@/components/home/course";
import WhyChooseUs from "@/components/home/why";
import Testimonials from "@/components/home/testimonial";
import CTA from "@/components/home/cta";
import Footer from "@/components/common/Footer";
export default function Home() {
  return (
    <>

      
      <Hero />
      <Stats />
      <About />
      <Courses/>
      <WhyChooseUs/>
      <Testimonials/>
      <CTA/>
      
    </>
  );
}
