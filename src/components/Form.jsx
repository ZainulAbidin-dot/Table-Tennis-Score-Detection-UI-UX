import React from "react";
import styles from "../styles";
import DropFiles from "./DropFiles";

const Form = () => {
  return (
    <div className={`${styles.boxWidth}`}>
      <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
      <div className="absolute z-[0] w-[50%] h-[50%] -left-[50%] rounded-full pink__gradient " />

      <div className={`${styles.flexCenter} ${styles.padding} flex-col`}>
        <h2
          className={`${styles.flexCenter} ${styles.padding} font-poppins font-semibold ss:text-[72px] text-[52px] ss:leading-[100px] leading-[75px] text-gradient`}
        >
          Choose the Video
        </h2>
        <DropFiles />
      </div>

      {/* <img src={} alt='tennis' /> */}
    </div>
  );
};

export default Form;
