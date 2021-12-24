const router = require('express').Router();
const fitnessRoutes = require('./fitnessRoutes');

router.use('/fitness', fitnessRoutes);

module.exports = router;
