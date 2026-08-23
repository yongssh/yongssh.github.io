import AboutSection from "./components/About";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import "./styles/globals.css";

export const metadata = {
  title: "Yong-Yu Huang",
  description: "Yong-Yu Huang is a recent graduate of Northwestern University",
};

export default function Home() {
  return (
    <div className="wrapper">
      <NavBar />

      <main id="main-content">
        <AboutSection />
      </main>

      <Footer />
    </div>
  );
}