const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('nft', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  Description: {
    type: Sequelize.TEXT,
  },
  Location: {
    type: Sequelize.TEXT,
  },
  Votes: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});
module.exports = Product;
