import Navigation from "./components/navigation/Navigation"
import HeroSection from "./components/hero-section/HeroSection"
import Footer from "./components/footer/Footer"
import MainTeam from "./components/main-team/MainTeam";
import Testimonials from "./components/testimonials/Testimonials";
import About from "./components/about/About";
import Service from "./components/services/Service";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";


function App() {
  return (
    <div className="main">
      <Navigation />
      <HeroSection />
      <About />
      <Service />
      <MainTeam />
      <Testimonials />
      <Footer />
    </div >
  )
}

export default App
