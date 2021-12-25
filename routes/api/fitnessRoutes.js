const router = require('express').Router();
const { readFromFile, replaceFile } = require('../../utils/fsUtils');
const test = require('../../db/fitness.json');

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
    replaceFile(req.body, './db/fitness.json');
    res.json({ message: 'Fitness data added successfully', data: req.body });
  } catch (err) {
    res.status(400).json(err);
  }
});

module.exports = router;
