const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../utils/fsUtils');

// /api/fitness/
// GET fitness data
router.get('/', (req, res) => {
  try {
    console.log('hi');

    readFromFile('../../db/fitness.json').then((data) =>
      res.json(JSON.parse(data))
    );
  } catch (err) {
    res.status(400).json(err);
  }
});

// /api/fitness/
// POST fitness data
router.post('/', (req, res) => {
  try {
    readAndAppend(req.body, '../../db/fitness.json');
    res.json('Fitness data added successfully');
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
