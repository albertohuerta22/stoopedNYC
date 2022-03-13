const Sequelize = require('sequelize');
const db = require('../db');

const Vote = db.define('vote', {
  votes: {
    type: Sequelize.INTEGER,
  },
});

module.exports = Vote;
