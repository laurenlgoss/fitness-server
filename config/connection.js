const mongojs = require("mongojs");

const databaseUrl = "tommys-fitness";
const collections = ["fitness"];

const db = mongojs(databaseUrl, collections);

module.exports = db;
