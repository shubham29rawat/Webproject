const passport = require('passport');

const LocalStrategy = require('passport-local').Strategy;

const User = require('../models/user');

//authentication using passport
passport.use(new LocalStrategy({
    usernameField: 'email'
}, 
function(email, password, done){
    //  find a user and establish the identity
    User.findOne({email: email}, function(err, user){
        if (err){
            console.log("error in finding user");
            return done(err);
        }
        if(!user || user.password != password){
            console.log("invalid username/password");
            return done(null, false)
        }

        return done(null, user);
    });
}

));

//serializing to decide which key is to keep in the cookies
passport.serializeUser(function(user, done){
    done(null, user.id);
});

//derializing the user from the key in the cookies
passport.deserializeUser(function(id, done){
    User.findById(id, function(err, user){
        if(err){
            console.log("error in finding user");
            return done(err);

        }
        return done(null, user);
    })
});


//check if the user is authenticated
passport.checkAuthenticate = function(req, res, next){
    //if the user is digned in then pass on the request to the next function(controller's action)
    if(req.isAuthenticated()){
        return next();

    }
    //if the user isnt signed in 
    return res.redirect('/users/sign-in');
}
passport.setAuthentication = function(req, res, next){
    if(req.isAuthenticated()){
        //req.user container the current signed in user
        //  from the session coookie and we are just sending this to the locals for the views
        res.locals.user = req.user;
    }
    next();
}

module.exports = passport;