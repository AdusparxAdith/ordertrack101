const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const dbURL = config.get("mongoURI");
const app = express();
const db = require("./config/db");

const port = 3000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use("/api/orders", require("./routes/api/orders"));

app.get("/", (req, res) => {
  res.send("Server is running");
});

db.connect(dbURL, function(err) {
  if (err) {
    console.log("Unable to connect to Mongo.");
    process.exit(1);
  } else {
    console.log("MongoDB connected...");
  }
});

app.listen(port, function() {
  console.log("Listening on port 3000...");
});
