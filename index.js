const express = require("express");
const bodyParser = require("body-parser");
const config = require("config");
const dbURL = config.get("mongoURI");
const cors = require("cors");
const app = express();
const db = require("./config/db");
const path = require("path");

db.connect(dbURL, function(err) {
  if (err) {
    console.log("Unable to connect to Mongo.");
    process.exit(1);
  } else {
    console.log("MongoDB connected...");
  }
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());
app.use(cors());
app.use("/api/orders", require("./routes/api/orders"));
app.use("/api/update", require("./routes/api/update"));

//Serve static assets in production
if (process.env.NODE_ENV === "production") {
  //Set static folder
  app.use(express.static("client/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;

app.listen(PORT, function() {
  console.log(`Listening on port ${PORT}...`);
});
