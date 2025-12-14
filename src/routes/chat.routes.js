const express = require("express");
const auth = require("../middleware/auth.middleware");
const { chat } = require("../controllers/chat.controller");

const router = express.Router();

router.post("/", auth, chat);

module.exports = router;
