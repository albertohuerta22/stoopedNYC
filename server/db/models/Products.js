const Sequelize = require('sequelize')
const db = require('../db')

const Product = db.define('nft', {
  name: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  },
  Description: {
    type: Sequelize.TEXT,
    defaultValue: 'Grace_Hopper'
  },
  Location: {
    type: Sequelize.TEXT,
    defaultValue: 'Grace_Hopper'
  },
  Votes: {
    type: Sequelize.INTEGER,
    defaultValue: 'Grace_Hopper'
  },
  imageUrl: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true
    }
  }

})
module.exports = Product