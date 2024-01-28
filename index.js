const express = require("express");
const app = express();
const indexofroute = require("./route");
app.use(express.json());
app.use((req, res, next) => {
  const date = new Date().toISOString();
  console.log(req);
  req.body.date = date;
  next();
});
app.use("/", indexofroute);
app.use((err, req, next, res) => {
  const newerr = err ? err.toString() : "new error";
  res.status(500).json({ msg: newerr });
});
app.listen(8000, () => {
  console.log("app is runing");
});
