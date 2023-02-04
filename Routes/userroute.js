const express = require("express");
const { Createauthor ,Getauthors ,followauthor,follow} = require("../Authorscontroller/Authorscontroller");
const { Addbook, getBooks , getBooksbyid , Searchbooks} = require("../Bookscontroller/bookscontroller");
const { home } = require("../home");
const { Addpost, getposts } = require("../Postcontroller/Postscontroller");
const { Register , login} = require("../Userscontroller/userscontroller");




const router = express.Router();
router.get("/",home);
router.post("/Register", Register);
router.post("/follow/", follow);
router.post("/login", login);
router.post("/Uploadpost", Addpost);
router.post("/Createauthor", Createauthor);
router.post("/uploadbook", Addbook);
router.get("/getposts", getposts);
router.get("/Getauthors", Getauthors);
router.get("/allbooks", getBooks);
router.get("/Allbooks/:id", getBooksbyid);
router.get("/Allbooks/search/:name", Searchbooks);





module.exports = router;