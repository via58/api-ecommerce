const express = require("express");
const { getAllUsers, createNewUser } = require("../controller/index");

const router = express.Router();

router.get("/", getAllUsers);
router.post("/create", createNewUser);


module.exports = router;