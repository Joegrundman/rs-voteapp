/**
 * Database Index
 */

var mongoose = require('mongoose');


var UserModel   = require('./models/Users')
// Connections

require('../passport/')

var developmentDb = 'mongodb://localhost/voterapp-test';
var productionDb = '';

var usedDb;

if (process.env.NODE_ENV === 'development'){
    usedDb = developmentDb;
} else {
    usedDb = productionDb;
}

mongoose.connect(usedDb);

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error'))

db.once('open', function dbConnection() {
    console.log('mongo database successfully connected on:', usedDb);
})

exports.users = UserModel;