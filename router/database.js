const mongoose = require('mongoose');

const farmSchema = new mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  contacts: [String],
  area_of_delivery: [String],
  product_type: [String]
});

const Farm = mongoose.model('Farm', farmSchema);

const farm = {
  _id: new mongoose.Types.ObjectId,
  name: 'Hacienda Santa Rita',
  contacts: ['(787)890-7654', 'gmail@yahoo.com'],
  area_of_delivery: ['Metro', 'Norte', 'Este'],
  product_type: ['Viandas', 'Frutas', 'Vegetales']
};

Farm.create(farm);
