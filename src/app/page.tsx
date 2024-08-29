import Projects from "@/sections/bento";
import Contact from "@/sections/contact";
import Hero from "@/sections/hero";
import Testimonials from "@/sections/testimonials";

export default function Home() {
  return (
    <div>
      <Hero />
      <Projects />
      <Testimonials />
      <Contact />
    </div>
  );
}
