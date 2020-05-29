const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  contact: [String],
  area_of_delivery: [String],
  product_type: [String]
});

const Farm = mongoose.model('Farm', farmSchema);

module.exports = {
  mongoose,
  Farm
};
