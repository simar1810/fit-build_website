import Hero from "@/components/Hero";
import AuthoritySnapshot from "@/components/AuthoritySnapshot";
import Qualification from "@/components/Qualification";
import ProgramsOverview from "@/components/ProgramsOverview";
import Process from "@/components/Process";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <AuthoritySnapshot />
      <Qualification />
      <ProgramsOverview />
      <Process />
      <Testimonials />
      <FinalCTA />
      {/* <Footer /> */}
    </>
  );
}
