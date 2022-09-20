import React from "react";
import styles from "./styles";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AboutUs from "./components/AboutUs";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Ranking from "./components/Ranking";
import TopPlayers from "./components/TopPlayers";

const App = () => (
  <BrowserRouter>
    <div className="bg-primary w-full overflow-hidden">
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
    </div>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="topPlayers" element={<TopPlayers />} />
      <Route path="aboutUs" element={<AboutUs />} />
      <Route path="ranking" element={<Ranking />} />
    </Routes>
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Footer />
      </div>
    </div>
  </BrowserRouter>
);

export default App;
