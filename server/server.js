const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const fsPromises = require("fs").promises;
const path = require("path");
const spawn = require("child_process").spawn;

// console.log that your server is up and running
app.listen(port, () => console.log(`Listening on port ${port} ...`));
app.use(cors());
app.use(express.static("public"));
app.use(express.json());
// create a GET route
app.post("/express_backend", async (req, res) => {
  const f = req.body;
  console.log(req.body);
  console.log(f);
  await fsPromises.writeFile(path.join(__dirname, "dataa2.txt"), f.pathname);
  await fsPromises.writeFile(path.join(__dirname, "dataa.txt"), "");

  const child = spawn("python", ["./app.py"]);
  child.stdout.on("data", (data) => {
    console.log(`stdout: ${data}`);
  });

  child.stderr.on("data", (data) => {
    console.log(`stderr: ${data}`);
  });

  child.on("close", (code) => {
    console.log(`child process exited with code ${code}`);
  });

  res.send("Video is Processing...");
});

app.get("/result_video", async (req, res) => {
  const d = await fsPromises.readFile(path.join(__dirname, "dataa.txt"), {
    encoding: "utf8",
  });

  res.json({ key: "Video File is running", value: d });
});
