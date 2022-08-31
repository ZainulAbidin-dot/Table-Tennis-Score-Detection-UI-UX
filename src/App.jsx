import React from "react";
import Billing from "./components/Billing";
import Clients from "./components/Clients";
import Footer from "./components/Footer";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import OutputReport from "./components/OutputReport";
import styles from "./styles";
const App = () => (
  <div className="bg-primary w-full overflow-hidden">
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Clients />
        <Form />
        <OutputReport />
        <Footer />
      </div>
    </div>
  </div>
);

export default App;
