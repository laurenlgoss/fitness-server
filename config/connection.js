const mongojs = require('mongojs');

const databaseUrl = process.env.MONGODB_URI || 'tommys-fitness';
const collections = ['fitness'];

const db = mongojs(databaseUrl, collections);

module.exports = db;
