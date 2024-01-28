const router = require("express").Router();
router.get("/", (res, req) => {
  res.json({ msg: "hello from prabein" });
});
router.put("/:id", (res, req, next) => {
  try {
    console.log({ body: req.body });
    const { id } = req.param;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "create a new user" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (res, req) => {
  console.log({ body: req.body });
  res.json({ msg: "hello from user" });
});
router.patch("/:data", (res, req, next) => {
  try {
    console.log({ data: req.body });
    const data = Object.keys(req.body).length;
    if (!data) throw new ERROR("something else");
    res.json({ msg: "update the user" });
  } catch (e) {
    next(e);
  }
});
router.delete("/:id", (res, req, next) => {
  try {
    console.log({ id: req.body });
    const id = Object.keys(req.body).length;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "delete  the user" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
