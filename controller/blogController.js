const Blog = require("../models/blog");

// blog_index blog_details blog_create_get blog_delete blog_create_post

const blog_index = (req, res) => {
  Blog.find()
    .sort({ createdAt: 1 })
    .then((result) => {
      res.render("index", { title: "Home", blogs: result });
    })
    .catch((err) => console.log(err));
};

const blog_details = (req, res) => {
  const id = req.params.id;
  Blog.findById(id)
    .then((result) => {
      res.render("details", { blog: result, title: "Blog Detail" });
    })
    .catch((err) => console.log(err));
  // console.log(id);
};

const blog_create_get = (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./assets/about.html", { root: __dirname });
  res.render("create", { title: "Create" });
};

const blog_delete = (req, res) => {
  const id = req.params.id;
  Blog.findByIdAndDelete(id)
    .then(() => {
      res.json({ redirect: "/blogs" });
    })
    .catch((err) => console.log(err));
};

module.exports = {
  blog_index,
  blog_details,
  blog_create_get,
  blog_delete,
};
