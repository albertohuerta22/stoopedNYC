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
  votes: {
    type: Sequelize.INTEGER,
  },
  imageUrl: {
    type: Sequelize.TEXT,
    defaultValue: "https://drive.google.com/file/d/1YcAG7zeUAp-_heavbcMJjotND4yqnEN9/view?usp=sharing",
  },
  isAvailable:{
    type: Sequelize.BOOLEAN,
    defaultValue: true
  }
});
module.exports = Product;
