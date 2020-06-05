const express = require("express");
const app = express();

app.use(express.static("public"));

const nunjunck = require("nunjucks");
nunjunck.configure("src/views", {
  express: app,
  noCache: true
});

app.get("/", (_req, res) => {
  return res.render("index.html");
});
app.get("/creat-point.html", (req, res) => {
  return res.render("creat-point.html");
});
app.get("/search", (req, res) => {
  return res.render("search-result.html");
});

app.listen(3000);
