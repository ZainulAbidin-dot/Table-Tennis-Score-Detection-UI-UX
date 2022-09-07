import Form from "./Form";
import OutputReport from "./OutputReport";
import styles from "../styles";
import React from "react";
import Billing from "./Billing";
import Clients from "./Clients";
import Footer from "./Footer";

const Home = () => {
  return (
    <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Billing />
        <Clients />
        <Form />
        <OutputReport />
      </div>
    </div>
  );
};

export default Home;
