const express = require('express');
const router = express.Router();
const {mongoose, Farm} = require('./database');

router.get('/', (req, res) => {
  Farm.find()
    .exec()
    .then(result => console.log(result));
  res.json();
});

router.get('/test', (req, res) => {
  res.json([
    {
      id: 6,
      name: 'Finca Caracoles',
      areaOfDelivery: ['Norte', 'Metro', 'Este'],
      productType: ['frutas', 'vegetales'],
      contacts: ['https://www.facebook.com/someFarm']
    }
  ]);
});

router.get('/test2', (req, res) => {
  res.json([
    {
      id: 7,
      name: 'Hacienda Don Pedro',
      areaOfDelivery: ['Este', 'Sur'],
      productType: ['frutas', 'Vegetales', 'Viandas'],
      contacts: ['https://www.facebook.com/someOtherFarm', 'yahoo@gmail.com']
    }
  ]);
});

module.exports = router;
