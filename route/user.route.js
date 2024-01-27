const router = require("express").Router();
router.get("/", (res, req) => {
  res.json({ msg: "hello from prabein" });
});
router.put("/:id", (res, req, next) => {
  try {
    const { id } = req.param;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "create a new user" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (res, req) => {
  res.json({ msg: "hello from user" });
});
router.patch("/", (res, req, next) => {
  try {
    Object.keys(({ id } = req.body)).length;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "update the user" });
  } catch (e) {
    next(e);
  }
});
router.delete("/", (res, req, next) => {
  try {
    Object.keys(({ id } = req.body)).length;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "delete  the user" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
