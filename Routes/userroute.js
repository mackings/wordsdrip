const express = require("express");
const { Createauthor ,Getauthors ,followauthor,follow} = require("../Authorscontroller/Authorscontroller");
const { Addbook, getBooks , getBooksbyid , Searchbooks, findmybooks, addchapter} = require("../Bookscontroller/bookscontroller");
const { home } = require("../home");
const { verifytoken } = require("../middlewares/jwt");
const { Addpost, getposts } = require("../Postcontroller/Postscontroller");
const { Register , login} = require("../Userscontroller/userscontroller");




const router = express.Router();
router.get("/",home);
router.post("/Register", Register);
router.post("/follow/", follow);
router.post("/login", login);
router.post("/Uploadpost", Addpost);
router.post("/Createauthor", Createauthor);
router.post("/Addbook/:id", Addbook);
router.post("/Addchapter/:id", addchapter);
router.get("/Allposts", verifytoken, getposts);
router.get("/Allauthors", Getauthors);
router.get("/Getmybooks/:id", findmybooks);
router.get("/Allbooks", getBooks);
router.get("/Allbooks/:id", getBooksbyid);
router.get("/Allbooks/search/:name", Searchbooks);





module.exports = router;