const { Schema, model } = require("../connection");


const equipmentSchema = new Schema({
  name: { type: String, required: true },
  category: { type: String, required: true},
  details: { type: String, required: true },
//   role: { type: String, required: true },
  created_at: Date,
  updated_at: Date,
});



module.exports = model("equipment", equipmentSchema);
