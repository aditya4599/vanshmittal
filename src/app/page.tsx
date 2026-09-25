import { About } from "@/components/About";
import { Beyond } from "@/components/Beyond";
import { Education } from "@/components/Education";
import { Experience } from "@/components/Experience";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { Learning } from "@/components/Learning";
import { Navbar } from "@/components/Navbar";
import { Recal } from "@/components/Recal";
import { Research } from "@/components/Research";

export default function Home() {
  return (
    <>
      <a
        href="#about"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-[60] focus:bg-bg-raised focus:px-3 focus:py-2"
      >
        Skip to content
      </a>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Research />
        <Learning />
        <Beyond />
        <Education />
        <Recal />
      </main>
      <Footer />
    </>
  );
}
