const express = require("express");
const app = express();

const db = require("./database/db");

app.use(express.static("public"));

const nunjunck = require("nunjucks");
nunjunck.configure("src/views", {
  express: app,
  noCache: true
});

app.get("/", (req, res) => {
  return res.render("index.html");
});
app.get("/creat-point.html", (req, res) => {
  console.log(req.query);

  return res.render("creat-point.html");
});
app.get("/search", (req, res) => {
  db.all(`SELECT * FROM places`, function(err, rows) {
    if (err) {
      return console.log(err);
    }
    const total = rows.length;

    return res.render("search-result.html", { places: rows, total });
  });
});

app.listen(3000);
