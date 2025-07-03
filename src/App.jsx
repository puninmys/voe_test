import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Countries from "./components/Countries";
import FactsFigures from "./components/FactsFigures";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navigation from "./components/Navigation";
import Services from "./components/Services";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  return (
    <>
      <Navigation />
      <Hero />
      <FactsFigures />
      <Services />
      <About />
      <WhyChooseUs />
      <Countries />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
