const User = require('../models/user')


module.exports.profile = function(req, res){

    if (req.cookies.user_id){
        User.findById(req.cookies.user_id, function(err, user){
            if(user){
                return res.render('user_profile', {
                        title: "User profile",
                        user: user
                    })

            }
            return res.redirect('/users/sign-in');
        });


    }else{
        return res.redirect('/users/sign-in');
    }
    
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
    if(req.body.password != req.body.confirm_password){
        console.log("password isnt matching")
        return res.redirect('back');
    }

    User.findOne({email: req.body.email}, function(err, user){
        if(err){console.log('error in finding the user in siginig up'); return}

        if(!user){
            User.create(req.body, function(err, user){
                if(err){console.log('error in creating the user in siginig up'); return}

                return res.redirect('/users/sign-in');
            })
        } else{
            return res.redirect('back');
        }
    })
}

// sign in and create a session for the user
module.exports.createSession = function(req, res){
    //find the user
    // User.findOne({email: req.body.email}, function(err, user){
    //     if(err){console.log('error in creating the user in siginig in'); return}
    //     //if the user found 
    //     if (user){
    //         //handle password which doesnt match
    //         if (user.password != req.body.password){
    //             return res.redirect('back')
    //         }

    //         //handle session creation
    //         res.cookie('user_id', user.id);
    //         return res.redirect('/users/profile');



    //     }else{

    //         // user not found
    //         return res.redirect('back')


    //     }





    // });

    return res.redirect('/');

   

}