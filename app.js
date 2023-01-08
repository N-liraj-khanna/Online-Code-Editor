require("dotenv").config({ path: "config.env" });
const bodyParser = require("body-parser");
express = require("express");
router = require("./router");

app = express();

app.use(bodyParser.json());
app.use("/", router);

app.get("/", (req, res) => {
  return res.send("Welcome to My code editor, by N Liraj Khanna");
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`Server up and running on port ${process.env.PORT || 5000}`);
});
