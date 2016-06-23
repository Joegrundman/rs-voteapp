/**
 * Routes Index
 */

 module.exports = function (app) {

   //Index
   app.use('/', require('./routes'))

   // Signup
   app.use('/signup', require('./routes/signup'))
   
 }