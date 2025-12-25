const router = require("express").Router();
const pool = require("../db");

router.get("/", async (req, res) => {
  const result = await pool.query("SELECT * FROM skills");
  res.json(result.rows);
});

module.exports = router;
