const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Hacienda Esperansa',
      areaOfDelivery: ['Metro'],
      productType: ['frutas'],
      contacts: ['(787)123-4567', 'email@email.com']
    },
    {
      id: 2,
      name: 'Finca Proventud',
      areaOfDelivery: ['Sur', 'Centro'],
      productType: ['Vegetales'],
      contacts: ['another_one@email.com']
    },
    {
      id: 3,
      name: 'Finca Santa Lucia',
      areaOfDelivery: ['Metro'],
      productType: ['frutas'],
      contacts: ['(787)765-4321']
    },
    {
      id: 4,
      name: 'Finca Santa Lucia',
      areaOfDelivery: ['Metro'],
      productType: ['frutas'],
      contacts: ['(787)765-4321']
    },
    {
      id: 5,
      name: 'Finca Santa Lucia',
      areaOfDelivery: ['Metro'],
      productType: ['frutas'],
      contacts: ['(787)765-4321']
    }
  ]);
});

router.get('/test', (req, res) => {
  res.json([
    {
      id: 4,
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
      id: 5,
      name: 'Hacienda Don Pedro',
      areaOfDelivery: ['Este', 'Sur'],
      productType: ['frutas', 'Vegetales', 'Viandas'],
      contacts: ['https://www.facebook.com/someOtherFarm', 'yahoo@gmail.com']
    }
  ]);
});

module.exports = router;
