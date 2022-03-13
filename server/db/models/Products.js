const Sequelize = require('sequelize');
const db = require('../db');

const Product = db.define('product', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  location: {
    type: Sequelize.TEXT,
    allowNull: false,
  },
  lat: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lng: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  votes: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});
module.exports = Product;
