import React, { useState } from "react";
import styles from "../styles";
import JolPlayer from "jol-player";

const DropFiles = () => {
  const [file, setFile] = useState("");
  const [toggle, setToggle] = useState(false);

  const dragOver = (e) => {
    e.preventDefault();
  };
  const dragEnter = (e) => {
    e.preventDefault();
  };
  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();
    const files = [...e.dataTransfer.files];
    setFile(URL.createObjectURL(files[0]));
    setToggle(true);
    console.log(file)
  
  };

  const uploadFile = (e) => {
    e.preventDefault();
    const files = e.target.files[0];
    console.log(files);
    setFile(URL.createObjectURL(files));
    setToggle(true);
    // console.log(URL.createObjectURL(files))
  };
  return (
    <div>
        <div
          onDragOver={dragOver}
          onDragEnter={dragEnter}
          onDragLeave={dragLeave}
          onDrop={fileDrop}
          className={` ${styles.flexCenter} ${styles.padding} ${styles.boxWidth} ${styles.paragraph} max-w-[520px] flex-wrap border-2 border-zinc-700`}
        >
          Drag and Drop files here or click to upload
        <input type="file" onChange={uploadFile} />
        </div>

          { toggle ?
            (
              <div>
                {/* <img src={file} alt="tennis" /> */}
                <video width="520" height="520" controls autoPlay type="video/mp4" src={file} />
              </div>  
            ) : null
          }
    </div>
  );
};

export default DropFiles;
