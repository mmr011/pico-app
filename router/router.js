const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {message: 'Hello world!', key: 1},
    {message: 'How are you?', key: 2},
    {message: 'Where are you from?', key: 3}
  ]);
});

router.get('/test', (req, res) => {
  res.json([{message: 'Hello again c:', key: 1}]);
});

router.get('/test2', (req, res) => {
  res.json([{message: 'This is yet another test.', key: 1}]);
});

module.exports = router;
