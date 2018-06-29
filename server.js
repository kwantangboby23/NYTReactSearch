const express = require("express");
const bodyParser = require("body-parser");

const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
var articlesController = require("./controllers/articlesController");
var router = new express.Router();


router.get("/api/saved", articlesController.find);
router.post("/api/saved", articlesController.insert);
router.delete("/api/saved/:id", articlesController.delete);
router.get("/*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});



app.use(router);

app.use(routes);

const db = process.env.MONGODB_URI || "mongodb://localhost:/nytreact";
mongoose.connect(db, function(error) {
  if (error) {
    console.error(error);
  }
  else {
    console.log("mongoose connection is successful");
  }
});



app.listen(PORT, () => {
  console.log(`🌎 ==> Server now on port ${PORT}!`);
});