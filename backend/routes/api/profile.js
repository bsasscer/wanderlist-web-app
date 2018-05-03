const express = require("express");
const router = express.Router();

// @route   GET api/profile/test
// @desc    Tests profile route
router.get("/test", (req, res) => res.json({ msg: "Profile works" }));

module.exports = router;
