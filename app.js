const express = require("express");

const app = express();

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
