const express = require("express");
const router = express.Router();
const signup = require("../handlers/auth/signUp");
const signin = require("../handlers/auth/signIn");

router.post("/signup", signup);
router.post("/signin", signin);

module.exports = router;
