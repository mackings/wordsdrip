const express = require("express");
const { Addbook, getBooks , getBooksbyid , Searchbooks} = require("../Bookscontroller/bookscontroller");
//const verifytoken = require("../middlewares/jwt");
const { Addpost, getposts } = require("../Postcontroller/Postscontroller");


const router = express.Router();

router.post("/Uploadpost", Addpost);
router.post("/uploadbook", Addbook);
router.get("/viewposts", getposts);
router.get("/Allbooks", getBooks);
router.get("/Allbooks/:id", getBooksbyid);
router.get("/Allbooks/search/:name", Searchbooks);





module.exports = router;