const router = require('express').Router();

const apiRoutes = require('./api/fitnessRoutes');

router.use('/api', apiRoutes);

module.exports = router;
