const router = require("express").Router();
const userrouter = require("./user.route");
const userindex = "/api/v1";
router.get("/", (res, req) => {
  res.json({ msg: "hello from prabein" });
});
router.use(`${userindex}`, userrouter);
module.exports = router;
