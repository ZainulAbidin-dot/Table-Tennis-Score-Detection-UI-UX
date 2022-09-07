import React from "react";
import styles from "../styles";

const OutputReport = () => (
  <div
    className={`${styles.flexCenter} ${styles.padding} ${styles.marginX} flex-col`}
  >
    <h2
      className={`font-poppins font-semibold ss:text-[72px] text-[32px] ss:leading-[100px] leading-[75px] text-gradient`}
    >
      Detect
    </h2>
    <div
      className={`${styles.flexCenter} ${styles.padding} ${styles.heading2} `}
    >
      <div
        className={`${styles.flexCenter}  ${styles.padding} flex-col border-2 border-zinc-700`}
      >
        <h2
          className={`${styles.flexCenter} ${styles.padding} ss:text-[32px] text-[32px] font-poppins font-normal ss:leading-[100px] leading-[75px] text-white`}
        >
          Score: 5
        </h2>
        <p className={`${styles.paragraph}`}>Alucard</p>
      </div>
      <div
        className={`${styles.flexCenter} ${styles.padding}  flex-col border-2 border-zinc-700`}
      >
        <h2
          className={`${styles.flexCenter} ${styles.padding} ss:text-[32px] text-[32px] font-poppins font-normal ss:leading-[100px] leading-[75px] text-white`}
        >
          Score: 7
        </h2>
        <p className={`${styles.paragraph}`}>Maverick</p>
      </div>
    </div>
    {/* <div className='absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient ' /> */}
  </div>
);

export default OutputReport;
