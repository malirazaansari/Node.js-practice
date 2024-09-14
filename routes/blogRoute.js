const express = require("express");
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
router.get("/blogs", (req, res) => {
  Blog.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
});

router.get("/blogs/create", (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./assets/about.html", { root: __dirname });
  res.render("create", { title: "Create" });
});
router.get("/aboutus", (req, res) => {
  res.redirect("/about");
});

router.post("/blogs", (req, res) => {
  // console.log(req.body);
  const blog = new Blog(req.body);
  blog
    .save()
    .then((result) => {
      res.redirect("/blogs");
    })
    .catch((err) => console.log("err"));
});

router.get("/blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Detail" });
    })
    .catch((err) => console.log(err));
  // console.log(id);
});

router.delete("/blog/:id", (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
});

module.exports = router;
