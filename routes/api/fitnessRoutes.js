const router = require('express').Router();
const db = require('../../config/connection');

// /api/fitness/
// GET fitness data
router.get('/', async (req, res) => {
  db.fitness.find({}, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.json(data);
    }
  });
});

// /api/fitness/
// POST fitness data
router.post('/', async (req, res) => {
  // Delete all data from db before posting new
  await db.fitness.remove({}, (err, data) => {
    if (err) {
      res.send(err);
    }
  });

  await db.fitness.insert(req.body, (err, data) => {
    if (err) {
      res.send(err);
    } else {
      res.send(data);
    }
  });
});

module.exports = router;
