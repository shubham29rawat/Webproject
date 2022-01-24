module.exports.profile = function(req, res){
    return res.render('user_profile', {
        title: "User profile"
    });
}

// render the sign up page

module.exports.signUp = function(req, res){
    return res.render('user_sign_up',{
        title: "codeial | sign up"
    })
}


// render the sign iin page
module.exports.signIn = function(req, res){
    return res.render('user_sign_in',{
        title: "codeial | sign in"
    })
}

//get the sign up data
module.exports.create = function(req, res){
    //to do later
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    //to do later
}