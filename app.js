const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");

const app = express();

const dbURI =
  "mongodb+srv://Ali_Raza:alirazaansari4@codeninja.hrlo2.mongodb.net/ningadb?retryWrites=true&w=majority";

mongoose
  .connect(dbURI)
  .then((result) => console.log("db connexted"))
  .catch((err) => console.log(err));

app.use(express.static("public"));
app.use(morgan("dev"));
// app.use(morgan("tiny"));

app.get("/blog-add", (req, res) => {
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

app.get("/allblogs", (req, res) => {
  Blog.find()
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});

app.get("/singleblog", (req, res) => {
  Blog.findById("66e365fea3a3e1bb509585c7")
    .then((result) => {
      res.send(result);
    })
    .catch((err) => console.log(err));
});
// looging by self now we use morgan logger
// app.use((req, res, next) => {
//   console.log("new request made");
//   console.log("Host: ", req.hostname);
//   console.log("path: ", req.url);
//   console.log("method: ", req.method);
//   next();
// });
// app.use((req, res, next) => {
//   console.log("next middle ware gonna runn now:");
//   next();
// });
app.set("view engine", "ejs");
// app.set("views", "assets");

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
app.get("/", (req, res) => {
  //   res.send("<p>Home Page</p>");
  // res.sendFile("./assets/index.html", { root: __dirname });
  res.render("index", { title: "Home" });
});

app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./assets/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.get("/blogs/create", (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./assets/about.html", { root: __dirname });
  res.render("create", { title: "Create" });
});
app.get("/aboutus", (req, res) => {
  res.redirect("/about");
});

app.use((req, res) => {
  // res.status(404).sendFile("./assets/404page.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
