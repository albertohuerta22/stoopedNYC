//this is the access point for all things database related!

const db = require('./db');

const User = require('./models/User');
const Product = require('./models/Products');
const Vote = require('./models/Vote');

//associations could go here!
// User.hasMany(Product);
// Product.belongsTo(User);

Product.hasOne(Vote);
Vote.belongsTo(Product);

module.exports = {
  db,
  models: {
    User,
    Product,
    Vote,
  },
};
