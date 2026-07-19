import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import Practices from "@/components/home/Practices";
import HowWeWork from "@/components/home/HowWeWork";
import OnlineConsultation from "@/components/home/OnlineConsultation";
import WhyUs from "@/components/home/WhyUs";
import Achievements from "@/components/home/Achievements";
import TeamPreview from "@/components/home/TeamPreview";
import CasesPreview from "@/components/home/CasesPreview";
import Testimonials from "@/components/home/Testimonials";
import TrustLogos from "@/components/home/TrustLogos";
import BlogPreview from "@/components/home/BlogPreview";
import FAQPreview from "@/components/home/FAQPreview";
import CTA from "@/components/home/CTA";

export default function Home() {
  return (
    <>
      {/* Dark stage */}
      <Hero />
      <Stats />
      <Practices />
      <HowWeWork />
      <OnlineConsultation />
      <WhyUs />
      <Achievements />
      <TeamPreview />
      <CasesPreview />
      {/* Light detail bands */}
      <Testimonials />
      <TrustLogos />
      <BlogPreview />
      <FAQPreview />
      {/* Dark close */}
      <CTA />
    </>
  );
}
