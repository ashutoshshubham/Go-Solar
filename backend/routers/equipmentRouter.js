const express = require("express");

const Model = require("../models/equipmentModel");
const router = express.Router();

router.get("/", (req, res) => {
  console.log("Request at user index");
  res.status(299).send("EquipmentRouter Working Perfectly!!");
});

router.post("/add", (req, res) => {
  console.log(req.body);
  new Model(req.body).save()
    .then((result) => {
      console.log("Equipment Data Saved");
      res.status(201).json({ status: "success", result })
    })
    .catch((err) => {
      console.error("Error saving user data", err);
      res.status(500).send("Error saving user data");
    })
  console.log("from equipment/add")
});



router.get("/getall", (req, res) => {
  Model.find()
    .then((result) => {
      console.log("All Equipment Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.get("/getbyid/:id", (req, res) => {
  Model.findById(req.params.id)
    .then((result) => {
      console.log("Equipment Data Retrieved");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error retrieving user data", err);
      res.status(500).send("Error retrieving user data");
    });
});

router.put("/update/:id", (req, res) => {
  Model.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then((result) => {
      console.log("Equipment Data Updated");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error updating equipment data", err);
      res.status(500).send("Error updating equipment data");
    });
});

router.delete("/delete/:id", (req, res) => {
  Model.findByIdAndDelete(req.params.id)
    .then((result) => {
      console.log("Equipment Data Deleted");
      res.status(200).json({ status: "success", result });
    })
    .catch((err) => {
      console.error("Error deleting equipment data", err);
      res.status(500).send("Error deleting equipment data");
    });
});

module.exports = router;
