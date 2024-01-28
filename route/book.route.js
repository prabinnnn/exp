const router = require("express").Router();
router.get("/", (res, req) => {
  res.json({ msg: "hello from prabein" });
});
router.put("/:id", (res, req, next) => {
  try {
    const { id } = req.param;
    if (!id) throw new ERROR("something else");
    res.json({ msg: "create a new book" });
  } catch (e) {
    next(e);
  }
});
router.post("/", (res, req) => {
  res.json({ msg: "hello from book" });
});
router.patch("/", (res, req, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new ERROR("something else");
    res.json({ msg: "update the book" });
  } catch (e) {
    next(e);
  }
});
router.delete("/", (res, req, next) => {
  try {
    const data = Object.keys(req.body).length;
    if (!data) throw new ERROR("something else");
    res.json({ msg: "delete  the book" });
  } catch (e) {
    next(e);
  }
});
module.exports = router;
