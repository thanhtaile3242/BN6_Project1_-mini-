const {getHomepage, postCreateUser, getCreatePage, getUpdatePage, postUpdateUser, getDeletePage, postDeleteUser} = require("../controllers/homeController.js");
const express = require("express");
const router = express.Router();
// Home
router.get("/home", getHomepage);
// create
router.get("/create", getCreatePage);
router.post("/create-user", postCreateUser);
// update
router.get("/update/:id", getUpdatePage);
router.post("/update-user", postUpdateUser);
// delete
router.get("/delete/:id", getDeletePage);
router.post("/delete-user", postDeleteUser);
// Export router
module.exports = router;
