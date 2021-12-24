const router = require('express').Router();
const { readFromFile, readAndAppend } = require('../../utils/fsUtils');
const test = require('../../db/fitness.json')

// /api/fitness/
// GET fitness data
router.get('/', async (req, res) => {
  try {
    const fitnessData = await readFromFile('./db/fitness.json');
    res.json(JSON.parse(fitnessData));
  } catch (err) {
    res.status(400).json(err);
  }
});

// /api/fitness/
// POST fitness data
router.post('/', (req, res) => {
  try {
    readAndAppend(req.body, './db/fitness.json');
    res.json('Fitness data added successfully');
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
