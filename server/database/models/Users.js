var mongoose    = require('mongoose')
var bcrypt      = require('bcryptjs')
var jwt         = require('jsonwebtoken')
var moment      = require('moment')
var jwtSecret   = require('../../config').jwtSecret

var UserSchema = new mongoose.Schema({
    
    username    : { type: String, required: true, unique: true },
    email       : { type: String, required: true, unique: true },
    password    : { type: String, required: true },
    permissions : { type: String, default: 'Normal'},
    profile     : {} // for future use
})

UserSchema.pre('save', function (next) {
    var user = this

    if(!user.isModified('password')) { return next() }
    
    bcrypt.genSalt(10, function(err, salt) {         
        if (err) { return next(err) }
        
        bcrypt.hash(user.password, salt, function(err, hash) {         
            if (err) { return next(err) }
            
            user.password = hash
            next()
        })
    })
})
    
UserSchema.methods.generateJWT = function(){
    var exp = moment().add(14, 'days').unix()
    
    return jwt.sign({
        _id: this._id,
        username: this.username,
        exp: exp
    }, jwtSecret)
}

mongoose.model('User', UserSchema)
