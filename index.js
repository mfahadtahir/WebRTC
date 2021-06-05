let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("main", { foo: "FOO" });
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));