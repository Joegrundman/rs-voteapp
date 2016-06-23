/**
 * index for passport authentication
 */

var passport = require('passport')
var LocalStrategy = require('passport-local').Strategy
var mongoose = require('mongoose')
var User = mongoose.model('User')
var bcrypt = require('bcryptjs')


passport.use(new LocalStrategy(
	function(email, password, done) {
        
		User.findOne({ email: email } , function (err, user) {
			if (err) { return done(err); }
			if (!user) {
				return done(null, false, { message: {email: 'Non-existant email.' }});
			}

            bcrypt.compare(password, user.password, function(err, isMatch) {
                if (err) { return done(err) }
                if (!isMatch) {
                    return done(null, false, { message: { password: 'Incorrect password' } });
                }
                
                return done(null, user)
            })

		})
	}
))