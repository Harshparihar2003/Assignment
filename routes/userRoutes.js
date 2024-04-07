const express = require("express");
const router = express.Router();

const {createUser, getAllUser, getAUser, checkExistence, userAboveAge, userNames} = require("../controller/userController");

router.post("/create-user", createUser);
router.get("/alluser", getAllUser);
router.get("/all-usernames", userNames)
router.get("/single-user/:id", getAUser);
router.post("/existence", checkExistence);
router.post("/age", userAboveAge);

module.exports = router;