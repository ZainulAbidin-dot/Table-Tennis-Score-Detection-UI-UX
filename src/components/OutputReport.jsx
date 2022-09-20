import React, { useState, useEffect, useRef } from "react";
import styles from "../styles";
import axios from "axios";

const OutputReport = () => {
  // const fetchRef = useRef(true);
  const [result, setResult] = useState(null);
  useEffect(() => {
    const intervalId = setInterval(async () => {
      await axios.get("http://localhost:5000/result_video").then((response) => {
        console.log(response.data);
        if (response.data.value !== "") {
          setResult(response.data.value);
          console.log(result);
          clearInterval(intervalId);
        }
      });
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      {result === "" || result === null ? (
        <h2
          className={`font-poppins font-semibold text-center ss:text-[34px] text-[32px] ss:leading-[100px] leading-[75px] text-gradient`}
        >
          Loading... <br />
          No Result Formed Yet
        </h2>
      ) : (
        <div
          className={`${styles.flexCenter} ${styles.padding} ${styles.marginX} flex-col`}
        >
          {" "}
          <div>
            <h2
              className={`font-poppins font-semibold ss:text-[72px] text-[32px] ss:leading-[100px] leading-[75px] text-gradient`}
            >
              Detected File Placed
            </h2>{" "}
            <h2
              className={`font-poppins font-semibold ss:text-[14px] text-[12px] ss:leading-[100px] leading-[75px] text-gradient`}
            >
              Path: C:/Users/zchxv/Desktop/Extra/Table Tennis Score
              Keeping/project/yolov5/{result}
            </h2>
            {/* <video
              width="520"
              height="520"
              controls
              autoPlay
              type="video/mp4"
              src={"../../game_1.mp4"}
            /> */}
          </div>
        </div>
      )}
      {/* <div className="absolute z-[0] w-[60%] h-[60%] -right-[40%] rounded-full blue__gradient " /> */}
    </div>
  );
};

export default OutputReport;
