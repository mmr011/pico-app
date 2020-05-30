const express = require('express');
const router = express.Router();
const {mongoose, Farm} = require('./database');

router.get('/', (req, res, next) => {
  Farm.find()
    .exec()
    .then(result => res.json({farms: result}))
    .catch(error => next(error));
});

router.get('/metro', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Metro"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      console.log(doc);
      res.json({ farms: doc });
    };
  });
});

router.get('/norte', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Norte"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      res.json({ farms: doc })
    };
  });
});

router.get('/sur', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Sur"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      res.json({ farms: doc });
    };
  });
});

router.get('/este', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Este"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      res.json({ farms: doc });
    };
  });
});

router.get('/oeste', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Oeste"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      res.json({ farms: doc });
    };
  })
});

router.get('/centro', (req, res, next) => {
  Farm.find({
    area_of_delivery: "Centro"
  }, function (err, doc) {
    if(err) {
      next(err);
    } else {
      res.json({ farms: doc });
    };
  })
});

module.exports = router;
