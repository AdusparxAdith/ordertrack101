const express = require("express");
const router = express.Router();
const ObjectId = require("mongodb").ObjectID;
const db = require("../../config/db");

router.get("/:id/:type/:value", async (req, res) => {
  try {
    const type = req.params.type;
    const value = req.params.value;
    const id = req.params.id;

    const collection = db.get().collection("orders");
    const result = await collection.updateOne(
      { _id: ObjectId(id) },
      {
        $set: {
          [type]: value
        }
      }
    );
    console.log(result);
    console.log("Successfully updated", type, "to", value, id);
    res.status(200).send("Successfully updated");
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Server error");
  }
});

module.exports = router;
