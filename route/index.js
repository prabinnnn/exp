const router = require("express").Router();
const userrouter = require("./user.route");
const bookrouter = require("./book.route");
const bookindex = "/api/v1";
const userindex = "/api/v1";
router.get("/", (res, req) => {
  res.json({ msg: "hello from prabein" });
});
router.use(`${bookindex}`, bookrouter);
router.use(`${userindex}`, userrouter);
module.exports = router;
