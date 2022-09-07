const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const fs = require("fs");
const spawn = require("child_process").spawn;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port} ...`));
app.use(cors());

// create a GET route
app.get("/express_backend", (body, res) => {
  //   const f = body.params.filename;

  const child = spawn("python", ["../yolov5/detect.py"]);
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  res.send("Video File is running");
});
