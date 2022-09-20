import React, { useState } from "react";
import axios from "axios";
import styles from "../styles";

const DropFiles = () => {
  const [file, setFile] = useState("");
  const [toggle, setToggle] = useState(false);
  const [pill, setPill] = useState("");

  const options = [
    {
      label: "Game Video 1",
      value: "../game_1.mp4",
    },
    {
      label: "Game Video 2",
      value: "../game_1.mp4",
    },
    {
      label: "Game Video 3",
      value: "../game_2.mp4",
    },
    {
      label: "Game Video 4",
      value: "../game_2.mp4",
    },
  ];

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = async (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setFile(URL.createObjectURL(files[0]));
    setToggle(true);
    await axios
      .get("http://localhost:5000/express_backend")
      .then((response) => console.log(response.data));

    console.log(file);
  };

  const uploadFile = async (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    console.log(files);
    setFile(URL.createObjectURL(files));
    console.log(file);
    setToggle(true);

    await axios
      .get("http://localhost:5000/express_backend")
      .then((response) => console.log(response.data));

    // await axios
    //   .post(
    //     "http://localhost:5000/express_backend_files",
    //     { fil },
    //     {
    //       headers: {
    //         "Content-Type": "multipart/form-data",
    //         "Access-Control-Allow-Origin": "http://127.0.0.1:5001",
    //         // Accept: "application/json",
    //       },
    //       withCredentials: true,
    //     }
    //   )
    //   .then((response) => console.log(response.data));
  };

  const handlechange = async (e) => {
    e.preventDefault();
    setPill(e.target.value);
    setToggle(true);
    await axios
      .post("http://localhost:5000/express_backend", {
        pathname: e.target.value,
      })
      .then((response) => console.log(response.data));
  };

  return (
    <div>
      {/* <div
        onDragOver={dragOver}
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={fileDrop}
        className={` ${styles.flexCenter} ${styles.padding} ${styles.boxWidth} ${styles.paragraph} max-w-[520px] flex-wrap border-2 border-zinc-700`}
      >
        <span className={`mb-4 font-bold`}>
          Drag and Drop files here or click to upload
        </span>
        <input type="file" onChange={uploadFile} />
      </div> */}
      <div
        className={` ${styles.flexCenter} ${styles.padding} ${styles.boxWidth} ${styles.paragraph} max-w-[520px] flex-wrap border-2 border-zinc-700`}
      >
        <select
          className="text-black w-[10rem]"
          value={pill}
          onChange={handlechange}
        >
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      {toggle ? (
        <div>
          {/* <img src={file} alt="tennis" /> */}
          <video
            width="520"
            height="520"
            controls
            autoPlay
            type="video/mp4"
            src={pill}
          />
        </div>
      ) : null}
      <div></div>
    </div>
  );
};

export default DropFiles;
