var ambiente = process.env.NODE_ENV || 'development';
var config = require('../knexfile')[ambiente];
module.exports = require('knex')(config);