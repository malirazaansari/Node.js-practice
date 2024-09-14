const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const { render } = require("ejs");
const bodyParser = require("body-parser");
const blogRouters = require("./routes/blogRoute");

const app = express();

const dbURI =
  "mongodb+srv://Ali_Raza:alirazaansari4@codeninja.hrlo2.mongodb.net/ningadb?retryWrites=true&w=majority";

mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => console.log("db connexted"))
  .catch((err) => console.log(err));

//blog routes
app.use(blogRouters);

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(morgan("dev"));
app.use(express.json());
app.use(bodyParser.json());
// app.use(morgan("tiny"));

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
  // const blogs = [
  //   { title: "ali", snippet: "raza" },
  //   { title: "ali", snippet: "raza" },
  //   { title: "ali", snippet: "raza" },
  // ];
  //   res.send("<p>Home Page</p>");
  // res.sendFile("./assets/index.html", { root: __dirname });
  // res.render("index", { title: "Home", blogs });
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  //   res.send("<p>About Page</p>");
  // res.sendFile("./assets/about.html", { root: __dirname });
  res.render("about", { title: "About" });
});

app.use((req, res) => {
  // res.status(404).sendFile("./assets/404page.html", { root: __dirname });
  res.status(404).render("404", { title: "404" });
});
