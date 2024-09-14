const express = require("express");
const blogController = require("../controller/blogController");
const Blog = require("../models/blog");

const router = express.Router();

// getting blog routes
router.get("/blog-add", (req, res) => {
  const blog = new Blog({
    title: "new blog 2",
    snippet: "about my new blog",
    body: "body of my new blog",
  });
  blog
    .save()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/allblogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

router.get("/singleblog", (req, res) => {
  Blog.findById("66e365fea3a3e1bb509585c7")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

// blogs router

router.get("/aboutus", (req, res) => {
  res.redirect("/about");
});

router.get("/blogs", blogController.blog_index);
router.get("/blogs/create", blogController.blog_create_get);
router.post("/blogs", (req, res) => {
  console.log(req.body);
  console.log("Request body:", req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => {
      console.log("err creating blog", err);
    });
});
router.get("/blog/:id", blogController.blog_details);
router.delete("/blog/:id", blogController.blog_delete);

module.exports = router;
