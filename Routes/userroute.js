const express = require("express");
const { Addbook } = require("../Bookscontroller/bookscontroller");
const verifytoken = require("../middlewares/jwt");
const { Addpost, getposts } = require("../Postcontroller/Postscontroller");


const router = express.Router();

router.post("/signup", Addpost);
router.post("/addbook", Addbook);
router.get("/viewposts", getposts);





module.exports = router;