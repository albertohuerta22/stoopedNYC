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
    type: Sequelize.DECIMAL,
    defaultValue: 40.78384,
  },
  lng: {
    type: Sequelize.DECIMAL,
    defaultValue: -73.965553,
  },
  votes: {
    type: Sequelize.INTEGER,
    defaultValue: 0,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue:
      'https://cdn.pixabay.com/photo/2016/03/22/04/23/map-1272165_960_720.png',
  },
  isAvailable: {
    type: Sequelize.BOOLEAN,
    defaultValue: true,
  },
});
module.exports = Product;
