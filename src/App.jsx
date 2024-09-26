// import { useState } from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/hero";
import Newsletter from "./components/Newsletter";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Products from "./components/Products";
import Shop from "./components/Shop";
import Features from "./components/Features";
import Blog from "./components/Blog";

function App() {
  return (
    <div className="App">
      <div>
        <Navbar />
        <Hero />
        <Cards />
        <Products />
        <Shop />
        <Newsletter />
        <Blog />
        <Features />
        <Footer />
      </div>
    </div>
  );
}

export default App;
