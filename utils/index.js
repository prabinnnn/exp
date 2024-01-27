const express = require("express").app();
const indexofroute = require("../route");
app.use(express.json());
app.use("/", indexofroute);
app.use((err, req, next, res) => {
  const newerr = err ? err.toString() : "new error";
  res.status(500).json({ msg: Error });
});
app.listen(8000, () => {
  console.log("app is runing");
});
