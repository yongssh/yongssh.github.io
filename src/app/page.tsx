
import { EB_Garamond } from "next/font/google";
import IntroSection from "./components/introduction";
import AboutSection from "./components/about";
import NavBar from "./components/NavBar";
import Footer from "./components/footer";
import "./styles/globals.css";

export const metadata = {
  title: "Yong-Yu Huang",
  description: "Yong-Yu Huang's Portfolio",
};

export default function Home() {
  return (
    <div className={`wrapper bg-white text-black min-h-screen flex flex-col font-zen-old-mincho`}>
      
      <header>
        <NavBar />
      </header>

      <main id="main-content" className="flex-grow">
        {/* <section id="intro" aria-labelledby="intro-heading">
          <IntroSection />
        </section> */}

        <section id="about" aria-labelledby="about-heading">
          <AboutSection />
        </section>
      </main>
        <Footer />
    </div>
  );
}
