const express = require("express");
const router = express.Router();

/**
 * @route POST /api/blogs
 * @description Create a new blog
 * @access Login required
 */
router.post("/", (req, res) => {
  res.send("Create new blogs");
});

/**
 * @route PUT /api/blogs/:blogID
 * @description Update a blog
 * @access Login required
 */
router.put("/", (req, res) => {
  res.send("Update a blog");
});

/**
 * @route GET /api/blogs
 * @description Get a list of blogs
 * @access Login required
 */
router.get("/", (req, res) => {
  res.send("Get a list of blogs");
});

/**
 * @route GET /api/blogs/:blogID
 * @description Remove a blog
 * @access Login required
 */
router.delete("/", (req, res) => {
  res.send("Remove a blog");
});

module.exports = router;
