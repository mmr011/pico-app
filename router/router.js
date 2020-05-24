const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json({message: 'Hello world!'});
});

router.get('/test', (req, res) => {
  res.json({message: 'Hello again c:'});
});

module.exports = router;
