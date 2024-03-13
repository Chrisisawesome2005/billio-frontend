import React from "react";
import Navigation from "./Navigation";
import Hero from "./Hero";
import About from "./About";
import Services from "./Services";
import Feautres from "./Feautres";
import Counter from "./Counter";
import Reviews from "./Reviews";
import Blog from "./Blog";
import Contact from "./Contact";
import Footer from "./Footer";

const Home = () => {
  return (
    <>
      <Navigation />
      <Hero />
      <Services />
      <About />
      <Feautres />
      <Counter />
      <Reviews />
      <Blog />
      <Contact />
      <Footer />
    </>
  );
};

export default Home;
