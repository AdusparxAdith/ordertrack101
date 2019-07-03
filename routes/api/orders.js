const express = require("express");
const router = express.Router();
const db = require("../../config/db");

router.post("/", async (req, res) => {
  try {
    const collection = db.get().collection("orders");
    const result = await collection.insertOne(req.body);
    console.log("Order Added successfully");
    res.status(200).send("Order Added successfully");
  } catch (error) {
    console.error(err.message);
    res.status(500).send("Server error");
  }
});

router.get("/", async (req, res) => {
  try {
    const collection = db.get().collection("orders");
    const result = await collection.find().toArray();
    console.log(result.length);
    res.send(`${result.length} results fetched`);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
