var express = require("express");
var app = express();

app.use(express.static("public"));
app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.set("view engine", "ejs");

const PORT = process.env.PORT || 8000;
app.listen(PORT, function () {
  console.log("Server Listening. Port:" + PORT);
});

app.get("/", (req, res) => {
  res.render("index");
});

app.post("/", function (req, res) {
  console.log(req.body);
  res.send(req.body);
});
