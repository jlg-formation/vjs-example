import express from "express";
import serveIndex from "serve-index";
import morgan from "morgan";

import api from "./api";

const app = express();
const port = 3000;
const publicDir = "../front/dist";

app.use(morgan("combined"));

app.use("/api", api);

app.use(express.static(publicDir));
app.use(serveIndex(publicDir, { icons: true }));

app.get("/**", (req, res) => {
  res.sendFile("index.html", { root: publicDir });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

console.log("About to start the server...");
